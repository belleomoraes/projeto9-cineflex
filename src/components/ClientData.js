export default function ClientData({bookData}) {
  console.log(bookData) 
  return (
        <div className="clientData">
        <span>
          Nome do comprador:
          <input type="text" placeholder="Digite seu nome..." />
        </span>
        <span>
          CPF do comprador
          <input type="number" placeholder="Digite seu CPF..." />
        </span>
      </div>
    )
}