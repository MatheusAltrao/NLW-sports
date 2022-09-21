function copyEmail() {
  const input = document.getElementById('input')
  const email = input.value

  navigator.clipboard.writeText(email)

}