export function mapCafe (cafe) {
  let parsed = cafe.cafecountry.split(';');
  cafe.country = parsed[0];
  cafe.state = parsed[1] ?? '';
  const countryWithState = cafe.country + (cafe.state ? `, ${cafe.state}` : '')
  const location = `${cafe.cafecity}, ${countryWithState}`
  return {
    name: cafe.name,
    photo: cafe.cafephoto[0] ? cafe.cafephoto[0].url : "/images/default-cafe.jpg",
    street: cafe.cafestreet,
    city: cafe.cafecity,
    zipCode: cafe.cafezipcode,
    country: cafe.country,
    state: cafe.state,
    phone: cafe.cafephone,
    dataAddress: `${cafe.city}, ${cafe.street}`,
    countryWithState,
    location
  }
}