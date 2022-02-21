import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export function Page() {
    const [product,setproduct]=useState([])

    const history=useHistory()

  async function getproduct(){
    const data=await fetch("https://fakestoreapi.com/products")
    const prdct=await data.json();
    console.log(prdct)
    setproduct(prdct)
  }

  useEffect(getproduct,[])

  return (
    <div className="page">
        <nav className="nav">
            <div className="nav-left"><Button variant="text" onClick={()=>history.push("/")}>Home</Button></div>
            <div className="nav-right">
                <Button variant="text" onClick={()=>history.push("/cart")}>cart</Button>
                <Button variant="text">category</Button>
            </div>
        </nav>
        <div className='products'>
            {product.map((p)=>(
                 <Product title={p.title} image={p.image} price={p.price} rating={p.rating} product={p} key={p.id}/>
            ))}
        </div>
    </div>
  );
}

function Product({title,image,price,rating,product}) {
    const { addItem } = useCart();
    return(
        <div className='product-card'>
        <Card sx={{ maxWidth: 345,padding:0.5}}>
      <CardMedia sx={{objectFit:"contain"}}
        component="img"
        height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent sx={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Rs:{price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"variant="contained" onClick={()=>addItem(product)}>Add to cart</Button>
      </CardActions>
    </Card>
    </div>
    )
}