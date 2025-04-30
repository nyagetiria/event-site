document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('event-form');

  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const interest = form.querySelector('select').value;

    if (!name || !email || !interest) {
      alert("Please fill in all fields!");
      return;
    }
    const registration = {
      name,
      email,
      interest
    };

    const registrations = JSON.parse(localStorage.getItem('registrations')) || [];
    registrations.push(registration);
    localStorage.setItem('registrations', JSON.stringify(registrations));

    alert("Thank you for registering!");
    form.reset();
  });
});