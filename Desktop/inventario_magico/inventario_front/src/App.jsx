import { useEffect, useState } from "react"
import  api from "./constants/api";

function App() {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);
  const [isAdd, setIsAdd] = useState();
  const [exclusion, setExclusion] = useState();

  const addItem = (e) => {
    e.preventDefault();
    if(item.quantity <= 0){
      alert('Quantidade inválida');
      return;
    };
    if(item.itemName === ''){
      alert('Nome do item inválido');
      return;
    }
    const itemExists = items.some(i => i.itemName === item.itemName);
    if(itemExists){
      alert(`${item.itemName} já cadastrado, alterando quantidade`);
      setItems(items.map(i => i.itemName === item.itemName ? 
        { ...i, quantity: item.quantity } : i
      ));
    } else {
      setItems([...items, item]);
      setIsAdd(!isAdd);
      setTimeout(() => setIsAdd(false), 2000);
    }
  }

  const changeItem = (e) => {
    const {name, value} = e.target;
    setItem({...item, [name]: value});
  }

  const handleDelete = (name) => {
    const confirm = window.confirm(`Tem certeza que deseja excluir ${name}? `);
    if(!confirm) return;
    setItems(items.filter(item => item.itemName !== name));
    setExclusion(!exclusion);
    setTimeout(() => setExclusion(false), 2000);
  }

  const listItems = async() => {
    try{
      const response = await api.get('/items');
      if(response.data){
        setItems(response?.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listItems();
  }, [])

  return (
    <div className="d-flex justify-content-center align-items-center 
    min-vh-100 min-vw-100 overflow-visible">
      <div className="container">
        <div style={{ maxHeight: '200px', overflowY: 'auto'}}>
          <table className="table scrollable">
            <thead className="table-primary position-sticky top-0">
              <tr>
                <th>Item</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody className="table-secondary">
              {items.map((item) => (
                <tr key={item.id}>
                  <td>{item.itemName}</td>
                  <td className="d-flex justify-content-between">{item.quantity}
                  <button className="btn btn-outline-danger" onClick={()=>handleDelete(item.itemName)}>
                    <i className="bi bi-trash3"></i>
                  </button>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <br />
        <form className="mt-3">
          <h2 className="text-center">Novo item</h2>
          <div className="mb-3">
            <label htmlFor="itemName" className="form-label">Item</label>
            <input type="text" className="form-control" id="name" 
            name="itemName" value={item.itemName} onChange={changeItem}/>
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">Quantidade</label>
            <input type="number" className="form-control" id="quantity" 
            name="quantity" value={item.quantity} step={1} min={1} onChange={changeItem}/>
          </div>
          <button type="submit" className="btn btn-primary" onClick={addItem}>Adicionar</button>
        </form>
        {isAdd &&
          <div className="mt-2 text-center justify-content-center alert alert-success" role="alert">
            Item adicionado com sucesso
          </div>
        }
        {exclusion &&
          <div className="mt-2 text-center justify-content-center alert alert-danger" role="alert">
            Item excluído com sucesso
          </div>
        }
      </div>
    </div>

  )
}

export default App
