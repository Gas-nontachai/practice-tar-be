import express from 'express';

const router = express.Router();

let users = [
  {
    "id": "1",
    "name": "Laptop Pro 14",
    "price": 45900,
    "description": "High performance laptop for developers"
  },
  {
    "id": "2",
    "name": "Wireless Mouse",
    "price": 890,
    "description": "Ergonomic wireless mouse with long battery life"
  },
  {
    "id": "3",
    "name": "Mechanical Keyboard",
    "price": 3290,
    "description": "Mechanical keyboard with RGB backlight"
  },
  {
    "id": "4",
    "name": "27-inch Monitor",
    "price": 12900,
    "description": "4K UHD monitor suitable for design and coding"
  },
  {
    "id": "5",
    "name": "USB-C Hub",
    "price": 1590,
    "description": "Multi-port USB-C hub with HDMI and USB 3.0"
  }
]


router.get('/', (req, res) => {
    res.json(users);
});

router.get('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
}); 

router.post('/', (req, res) => {
    if (!req.body?.name) {
        return res.status(400).json({ message: 'name is required' });
    }

    const newUser = {
        id: Date.now(),
        name: req.body.name,
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

router.put('/:id', (req, res) => {
    const user = users.find(u => u.id === Number(req.params.id));
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    user.name = req.body.name ?? user.name;
    res.json(user);
});

router.delete('/:id', (req, res) => {
    users = users.filter(u => u.id !== Number(req.params.id));
    res.status(204).end();
});

export default router;
