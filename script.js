//your JS code here. If required.

const tbody = document.getElementById("output");

const loadingRow = document.createElement("tr");
loadingRow.id = "loading";
loadingRow.innerHTML = `<td colspan="2" class="text-center">Loading...</td>`;
tbody.appendChild(loadingRow);

function createPromise(id) {
  const delay = (Math.random() * 2 + 1).toFixed(3); // 1–3 seconds
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id, time: delay }), delay * 1000);
  });
}

//promises
const promises = [createPromise(1), createPromise(2), createPromise(3)];

// Track start time
const startTime = performance.now();

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Remove loading row
  tbody.innerHTML = "";

  // Populate table with individual promise times
  results.forEach((result) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>Promise ${result.id}</td><td>${result.time}</td>`;
    tbody.appendChild(row);
  });

  // Add total row
  const totalRow = document.createElement("tr");
  totalRow.innerHTML = `<td>Total</td><td>${totalTime}</td>`;
  tbody.appendChild(totalRow);
});
