async function login () {
    const input = document.getElementById("customerNumber");
    const dataJson = await fetchData();
    return dataJson.find((element) => element.cNr === input);
}

async function fetchData() {
    try {
      const response = await fetch(`http://127.0.0.1:3000/getAllCustomers`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    }   
    catch (error) {
        console.error('Error fetching data:', error);
    }
  }