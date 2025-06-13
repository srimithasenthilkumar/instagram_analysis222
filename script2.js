document.getElementById('loanForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const income = parseFloat(document.getElementById('income').value);
  const loanAmount = parseFloat(document.getElementById('loanAmount').value);
  const creditScore = parseInt(document.getElementById('creditScore').value);
  const employmentYears = parseInt(document.getElementById('employmentYears').value);
  const education = document.getElementById('education').value;

  let approvalChance = 0;

  // Logic to simulate ML prediction
  if (income > 5000) approvalChance += 30;
  if (loanAmount < 50000) approvalChance += 20;
  if (creditScore > 700) approvalChance += 30;
  if (employmentYears >= 2) approvalChance += 10;
  if (education === 'graduate') approvalChance += 10;

  const resultBox = document.getElementById('result');
  resultBox.classList.remove('d-none', 'alert-danger', 'alert-success');

  if (approvalChance >= 60) {
    resultBox.textContent = "✅ Loan Approved! Great profile.";
    resultBox.classList.add('alert-success');
  } else if (approvalChance >= 40) {
    resultBox.textContent = "🟡 Loan Possibly Approved - Needs Review.";
    resultBox.classList.add('alert-warning');
  } else {
    resultBox.textContent = "❌ Loan Not Approved. Consider improving your score or income.";
    resultBox.classList.add('alert-danger');
  }
});
