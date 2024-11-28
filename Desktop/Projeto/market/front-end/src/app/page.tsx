import produtos from '../core/constants/products';

export default function Home() {
  return (
    <div>
      {produtos.map(prod=>
        <div key={prod.id}>
          <img src={prod.image} alt={prod.name} width={250} height={250}/>
          <h1>{prod.name}</h1>
          <p>{prod.description}</p>
          <pre>{prod.basePrice}</pre>
        </div>
      )}
    </div>
  );
}
