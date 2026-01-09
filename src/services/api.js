const API_BASE = "https://fake-api-havokk.vercel.app/api/efood";
const CHECKOUT_URL = "https://api-ebac.vercel.app/api/efood/checkout";

const normalizeRestaurants = (data) => {
  const list = (() => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.data)) return data.data;
    if (Array.isArray(data?.restaurants)) return data.restaurants;
    if (Array.isArray(data?.restaurantes)) return data.restaurantes;
    return [];
  })();

  return list.map((item) => ({
    id: item.id,
    name: item.titulo || item.name || "",
    description: item.descricao || item.description || "",
    image: item.capa || item.image || "",
    category: item.tipo || item.category || "",
    rating: Number(item.avaliacao ?? item.rating ?? 0),
    highlight: Boolean(item.destacado ?? item.highlight),
    menu: (item.cardapio || item.menu || []).map((menuItem) => ({
      id: menuItem.id,
      name: menuItem.nome || menuItem.name || "",
      description: menuItem.descricao || menuItem.description || "",
      price: Number(menuItem.preco ?? menuItem.price ?? 0),
      image: menuItem.foto || menuItem.image || "",
      serving: menuItem.porcao || menuItem.serving || ""
    }))
  }));
};

export async function getRestaurants() {
  const response = await fetch(`${API_BASE}/restaurantes`);

  if (!response.ok) {
    throw new Error(`Erro ao carregar restaurantes: ${response.status}`);
  }

  const json = await response.json();
  return normalizeRestaurants(json);
}

export async function checkoutOrder(payload) {
  const response = await fetch(CHECKOUT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Erro ao finalizar pedido: ${response.status}`);
  }

  return response.json();
}
