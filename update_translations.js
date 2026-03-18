const fs = require('fs');

const es = JSON.parse(fs.readFileSync('messages/es.json', 'utf8'));
const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));

// Common Tours strings
es.Tours.view_detail = "Ver detalle del plan";
es.Tours.close = "Cerrar";
es.Tours.modal_itinerary = "Itinerario por días";
es.Tours.modal_lodging = "Hospedaje asociado";
es.Tours.modal_activities = "Actividades principales";

en.Tours.view_detail = "View plan details";
en.Tours.close = "Close";
en.Tours.modal_itinerary = "Daily Itinerary";
en.Tours.modal_lodging = "Associated lodging";
en.Tours.modal_activities = "Main activities";

// Delete old keys
delete es.Tours["galapagos-island-hopping"];
delete es.Tours["andes-to-amazon"];
delete en.Tours["galapagos-island-hopping"];
delete en.Tours["andes-to-amazon"];

// 1. Galapagos
es.Tours["galapagos-explorer"] = {
  name: "Galápagos Explorer",
  duration: "5 Días / 4 Noches",
  description: "Descubre la evolución en su máxima expresión explorando las islas encantadas.",
  inclusions: ["Alojamiento premium", "Desayunos", "Snorkel", "Guía Naturalista"],
  exclusions: ["Vuelos", "Entrada al Parque Nacional"],
  lodging: "Finch Bay Spa u hotel categoría Primera",
  activities: ["Observación de fauna endémica", "Snorkel con tortugas marinas", "Caminatas volcánicas"],
  itinerary: [
    { day: "1", title: "Llegada a Baltra", description: "Recepción en aeropuerto y traslado a Santa Cruz." },
    { day: "2", title: "Tour Islote Navío", description: "Día completo de navegación y vida marina." },
    { day: "3", title: "Tortuga Bay", description: "Caminata por sendero de iguanas hacia playa de arena blanca." },
    { day: "4", title: "Tierras Altas", description: "Visita rancho de tortugas gigantes en estado salvaje." },
    { day: "5", title: "Retorno", description: "Traslado al aeropuerto para vuelo internacional." }
  ]
};

en.Tours["galapagos-explorer"] = {
  name: "Galapagos Explorer",
  duration: "5 Days / 4 Nights",
  description: "Discover evolution at its finest exploring the enchanted islands.",
  inclusions: ["Premium accommodation", "Breakfasts", "Snorkeling", "Naturalist Guide"],
  exclusions: ["Flights", "National Park Entrance Fee"],
  lodging: "Finch Bay Spa or First Class hotel",
  activities: ["Endemic wildlife observation", "Snorkeling with sea turtles", "Volcanic hikes"],
  itinerary: [
    { day: "1", title: "Arrival at Baltra", description: "Airport reception and transfer to Santa Cruz." },
    { day: "2", title: "Navio Islet Tour", description: "Full day of navigation and marine life." },
    { day: "3", title: "Tortuga Bay", description: "Hike through iguana trail to white sand beach." },
    { day: "4", title: "Highlands", description: "Visit giant tortoise ranch in the wild." },
    { day: "5", title: "Return", description: "Transfer to airport for international flight." }
  ]
};

// 2. Quito
es.Tours["quito-historical"] = {
  name: "Quito y Mitad del Mundo",
  duration: "3 Días / 2 Noches",
  description: "Sumérgete en la historia viva de la capital y pisa ambos hemisferios.",
  inclusions: ["Hotel céntrico", "Transporte privado", "Entradas a museos"],
  exclusions: ["Almuerzos libres", "Propinas"],
  lodging: "Casa Gangotena o similar",
  activities: ["Recorrido histórico guiado", "Visita al monumento Ecuatorial", "Degustación de chocolate"],
  itinerary: [
    { day: "1", title: "Llegada", description: "Check-in y tarde libre en Centro Histórico." },
    { day: "2", title: "City Tour", description: "Visita a la Basílica, Compañía de Jesús y Panecillo." },
    { day: "3", title: "Mitad del Mundo", description: "Experiencias en el paralelo 0° y retorno." }
  ]
};

en.Tours["quito-historical"] = {
  name: "Quito & Middle of the World",
  duration: "3 Days / 2 Nights",
  description: "Immerse yourself in the living history of the capital and step on both hemispheres.",
  inclusions: ["Centrally located hotel", "Private transportation", "Museum entrances"],
  exclusions: ["Free lunches", "Gratuities"],
  lodging: "Casa Gangotena or similar",
  activities: ["Guided historical tour", "Visit to Equatorial monument", "Chocolate tasting"],
  itinerary: [
    { day: "1", title: "Arrival", description: "Check-in and free afternoon in Historic Center." },
    { day: "2", title: "City Tour", description: "Visit Basilica, Compania de Jesus and Panecillo." },
    { day: "3", title: "Middle of the World", description: "Experiences at parallel 0° and return." }
  ]
};

// 3. Amazon
es.Tours["amazon-adventure"] = {
  name: "Aventura Amazónica",
  duration: "4 Días / 3 Noches",
  description: "Desconexión total en lo profundo de la selva del Napo.",
  inclusions: ["Lodge ecológico", "Alimentación completa", "Excursiones en canoa"],
  exclusions: ["Bebidas alcohólicas", "Botas de caucho personales"],
  lodging: "Mashpi Lodge o Lodge Nativo",
  activities: ["Caminatas nocturnas", "Observación de aves", "Visita a comunidad indígena"],
  itinerary: [
    { day: "1", title: "Ingreso a la Selva", description: "Viaje en canoa motorizada hasta el lodge." },
    { day: "2", title: "Dosel y Vida Salvaje", description: "Ascenso a la torre de observación y senderismo." },
    { day: "3", title: "Cultura Local", description: "Interacción con familias nativas del Napo." },
    { day: "4", title: "Salida", description: "Retorno río arriba a la ciudadela." }
  ]
};

en.Tours["amazon-adventure"] = {
  name: "Amazon Adventure",
  duration: "4 Days / 3 Nights",
  description: "Total disconnection deep in the Napo jungle.",
  inclusions: ["Eco-lodge", "Full board", "Canoe excursions"],
  exclusions: ["Alcoholic beverages", "Personal rubber boots"],
  lodging: "Mashpi Lodge or Native Lodge",
  activities: ["Night walks", "Bird watching", "Visit to indigenous community"],
  itinerary: [
    { day: "1", title: "Jungle Entry", description: "Motorized canoe trip to the lodge." },
    { day: "2", title: "Canopy & Wildlife", description: "Ascent to observation tower and hiking." },
    { day: "3", title: "Local Culture", description: "Interaction with native families of Napo." },
    { day: "4", title: "Departure", description: "Return upriver to the citadel." }
  ]
};

// 4. Banos
es.Tours["banos-extreme"] = {
  name: "Baños Extremo",
  duration: "3 Días / 2 Noches",
  description: "Adrenalina pura en la capital de la aventura andina.",
  inclusions: ["Alojamiento turístico", "Equipos de seguridad", "Guías expertos"],
  exclusions: ["Fotografías profesionales", "Comidas no especificadas"],
  lodging: "Luna Volcán o equivalente",
  activities: ["Rafting", "Canyoning", "Ruta de las cascadas en bicicleta"],
  itinerary: [
    { day: "1", title: "Ruta de Cascadas", description: "Recorrido en bici hasta el Pailón del Diablo." },
    { day: "2", title: "Deportes Extremos", description: "Mañana de Rafting y tarde de Canyoning." },
    { day: "3", title: "Relajación", description: "Mañana en aguas termales antes de partir." }
  ]
};

en.Tours["banos-extreme"] = {
  name: "Extreme Banos",
  duration: "3 Days / 2 Nights",
  description: "Pure adrenaline in the Andean adventure capital.",
  inclusions: ["Tourist accommodation", "Safety equipment", "Expert guides"],
  exclusions: ["Professional photography", "Unspecified meals"],
  lodging: "Luna Volcan or equivalent",
  activities: ["Rafting", "Canyoning", "Waterfall route by bike"],
  itinerary: [
    { day: "1", title: "Waterfall Route", description: "Bike tour to Pailon del Diablo." },
    { day: "2", title: "Extreme Sports", description: "Morning Rafting and afternoon Canyoning." },
    { day: "3", title: "Relaxation", description: "Morning in hot springs before departing." }
  ]
};

fs.writeFileSync('messages/es.json', JSON.stringify(es, null, 2));
fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
console.log("Translations successfully updated.");
