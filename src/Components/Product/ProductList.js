import Jeans from '../../assets/Jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import Tshirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png'
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'

const ProductList = [
    {
        id:1,
        name: 'Sport T-Shirt',
        Image: Tshirt,
        price: 25.99,
        oldPrice: 35.99,
        onsale: true,
        newArival: false,
        category: 'Mens'
    },
    {
        id:2,
        name: 'Slim Fit Jeans',
        Image: Jeans,
        price: 45.99,
        oldPrice: null,
        onsale: false,
        newArival: false,
        category: 'Mens'
    },
    {
        id:3,
        name: 'Leather Jacket',
        Image: LeatherJacket,
        price:189.99,
        oldPrice: 129.99,
        onsale: false,
        newArival: false,
        category: 'Mens'
    },
    {
        id:4,
        name: 'Skart Dress',
        Image: Skater,
        price: 29.44,
        oldPrice: 39.45,
        onsale: false,
        newArival: false,
        category: 'Womens'
    },
    {
        id:5,
        name: 'Baby Sleepsuit',
        Image: Sleepsuit,
        price: 29.99,
        oldPrice: null,
        onsale: false,
        newArival: true,
        category: 'Kids'
    },
    {
        id:6,
        name: 'Long Sleeve Shirt',
        Image: Shirt,
        price: 99,
        oldPrice: null,
        onsale: false,
        newArival: false,
        category: 'Mens'
    },
    {
        id:7,
        name: 'Floral Dress',
        Image: Dress,
        price: 180.99,
        oldPrice: null,
        onsale: false,
        newArival: true,
        category: 'Kids'
    },
    {
        id:8,
        name: 'Stripes Sweater',
        Image: Sweater,
        price: 70.99,
        oldPrice: 85.99,
        onsale: false,
        newArival: false,
        category: 'Kids'
    },
    {
        id:9,
        name: 'Skirt',
        Image: Skirt,
        price: 15.99,
        oldPrice: 20.99,
        onsale: false,
        newArival: true,
        category: 'Womens'
    },
    {
        id: 10,
        name: 'Baby Shirt',
        Image: BabyShirt,
        price: 22.99,
        oldPrice: null,
        onsale: false,
        newArival: true,
        category: 'Kids'
    },
    {
        id:11,
        name: 'Hoodie',
        Image: Hoodie,
        price: 35.99,
        oldPrice: 45.99,
        onsale: true,
        newArival: false,
        category: 'Mens'
    },
    {
        id:12,
        name: 'Full Sleevs Shirt',
        Image: ShirtDress,
        price: 10.99,
        oldPrice: 18.99,
        onsale: true,
        newArival: false,
        category: 'Womens'
    },
]

export default ProductList

