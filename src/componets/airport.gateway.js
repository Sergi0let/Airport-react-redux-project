const baseUrl = 'https://api.iev.aero/api/flights';
// /11-02-2022

export const getFlightData = (dateValue) =>
  fetch(`${baseUrl}/${dateValue}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((res) => res.body);
