

const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'DESKTOP COMPUTER' },
        { name: 'LAPTOP' },
        { name: 'MONITORS COMPUTER' },
        { name: 'KEYBOARD/MOUSE'},
        { name: 'PC PARTS'}
   
    
    ]);
    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'desktop',
            category: categories[0]._id,
            description: 'PowerSpec G445 Gaming PC Intel Core i9 12th Gen 12900K 3.2GHz Processor; NVIDIA GeForce RTX 4070 12GB GDDR6X; 32GB DDR4-3200 RAM; 1TB Solid State Drive',
            image: 'desktop.png',
            price: 1499.00,
            quantity: 20
        },
        {
            name: 'desktop1',
            category: categories[0]._id,
            description: 'IBuyPower Y60 Gaming PC Intel Core i9 14th Gen 14900KF 2.4GHz Processor; NVIDIA GeForce RTX 4070 Ti SUPER 16GB GDDR6X; 32GB DDR5-5600 RAM; 2TB Solid State Drive',
            image: 'desktop1.png',
            price: 1999.00,
            quantity: 20

        },
        {
            name: 'Lenovo Legion Pro 5 16" Gaming Laptop Computer Platinum Collection - Onyx Grey',
            category: categories[1]._id,
            description: 'Intel Core i7 13th Gen 13700HX 1.5GHz Processor; NVIDIA GeForce RTX 4070 8GB GDDR6; 32GB DDR5-4800 RAM; 1TB Solid State Drive',
            image: 'laptop.jpeg',
            price: 1199.00,
            quantity: 40

        },
        {
            name: 'Acer Predator Helios 16 PH16-71-91FL 16.0" Gaming Laptop Computer - Abyssal Black',
            category: categories[1]._id,
            description: 'Intel Core i9 13th Gen 13900HX 1.6GHz Processor; NVIDIA GeForce RTX 4080 12GB GDDR6; 32GB DDR5-5600 RAM; 2TB Solid State Drive',
            image: 'laptop1.jpeg',
            price: 1899.00,
            quantity: 30
        },
        {
            name: 'Samsung Odyssey G9 S49CG954 49" 5K DQHD (5120 x 1440) 240Hz Curved Screen Monitor',
            category: categories[2]._id,
            description: 'AMD FreeSync Premium Pro; HDR; HDMI DisplayPort; CoreSync RGB Light',
            image: 'monitor.jpeg',
            price: 1199.00,
            quantity: 40  
        },
        {
            name: 'Gigabyte AORUS CO49DQ SA 49" 5K WQHD (5210 x 1440) 144Hz Ultrawide Curved Screen Gaming Monitor',
            category: categories[2]._id,
            description: 'AMD FreeSync Premium Pro; HDR; HDMI DisplayPort USB Type-C; Dashboard',
            image: 'monitor1.jpg',
            price: 1099.00,
            quantity: 40   
        },
        {
            name: 'Logitech Keyboard and Mouse Combo',
            category: categories[3]._id,
            description: 'Logitech MX Keys S Combo Low-Profile Wireless Keyboard + MX Master 3S Wireless Mouse - (Black)',
            image: 'kbmouse.jpg',
            price: 199.00,
            quantity: 50   
        },
        {
            name: 'Cherry Keyboard and Mouse Combo',
            category: categories[3]._id,
            description: 'Cherry DW 9500 Slim Wireless Keyboard and Mouse Combo - Black',
            image: 'kbmouse1.jpeg',
            price: 119.00,
            quantity: 50   
        },
        {
            name: 'Computer Speakers',
            category: categories[4]._id,
            description: 'Edifier R1280T 2 Channel Stereo Powered Bookshelf Computer Speakers - Wood',
            image: 'speaker.jpeg',
            price: 119.00,
            quantity: 50  
        },
        {
            name: 'INTEL Bundle',
            category: categories[4]._id,
            description: 'Intel Core i9-12900K, ASUS Z790-V Prime WiFi DDR5, G.Skill Ripjaws S5 32GB Kit DDR5 6000, Computer Build Bundled',
            image: 'intel.jpeg',
            price: 399.00,
            quantity: 20
        },
        {
            name: 'AMD Bundle',
            category: categories[4]._id,
            description: 'AMD Ryzen 7 7800X3D, Gigabyte B650 Gaming X AX v2, G.Skill Flare X5 Series 32GB DDR5-6000 Kit, Computer Build Bundle',
            image: 'amd.png',
            price: 499.00,
            quantity: 20
        }
    ]);
    console.log('products seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Beta',
        lastName: 'b',
        email: 'bBeta@testmail.com',
        password: 'password12707',
        orders: [
            {
                products: [products[0]._id, products[0]._id, products[1]._id]}
        ]
    });

    await User.create({
        firstName: 'Alpha',
        lastName: 'Al',
        email: 'aalpha@testmail.com',
        password: 'password12707'


    });

    console.log('users seeded');

    process.exit();
            
        
    });