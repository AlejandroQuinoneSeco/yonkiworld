// netlify/functions/wc-results.js
// Proxy para football-data.org — evita el bloqueo CORS del navegador
// Esta función corre en el servidor de Netlify, no en el navegador

const FD_TOKEN = "3e86dd722d154e1babb82142b1b76065";

exports.handler = async function(event, context) {
  // CORS headers para permitir llamadas desde el navegador
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const response = await fetch(
      "https://api.football-data.org/v4/competitions/WC/matches?status=FINISHED",
      {
        headers: {
          "X-Auth-Token": FD_TOKEN,
        },
      }
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        headers,
        body: JSON.stringify({ error: "API error", status: response.status }),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
