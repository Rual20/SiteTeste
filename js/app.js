const modalTrigger = (productId) => {
    const modal = document.querySelector('.modal')
  
    if (productId != null) {
      const produto = produtos.filter( produto => produto.id == productId )[0]
      if (produto != null) {
        modal.querySelector('#title').value = produto.title
      }
    }
  
    modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')
  }
  
  const whatsappLinkGenerator = (phoneNumber, productTitle, productQuantity, buyerName, buyerAddress, buyerPayment) => `https://api.whatsapp.com/send?phone=${phoneNumber}&text=Olá eu quero: ${productQuantity} ${productTitle} - Entregar para ${buyerName} no endereco: ${buyerAddress} - A forma de pagamento será: ${buyerPayment}`
  
  const checkout = phoneNumber => {
    const form = document.querySelector('#form-product')
  
    form.addEventListener('submit', e => {
      e.preventDefault()
  
      const productTitle = form.querySelector('input#title').value
      const productQuantity = form.querySelector('input#quantity').value
      const buyerName = form.querySelector('input#name').value
      const buyerAddress = form.querySelector('input#address').value
      const buyerPayment = form.querySelector('select#payment').value
  
      const whatsappUrl = whatsappLinkGenerator(phoneNumber, productTitle, productQuantity, buyerName, buyerAddress, buyerPayment)
      window.location.href = whatsappUrl
    })
  }
  
  checkout('5596991002234')
  loadSearch(document.querySelector('#formSearch'), '#product-div')