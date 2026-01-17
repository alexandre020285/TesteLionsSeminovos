// Interface do veículo
export interface Vehicle {
  id: number
  name: string
  price: string
  image: string
  year: string
  km: string
  brand?: string
}

// Lista completa de veículos
export const vehicles: Vehicle[] = [
  { id: 1, name: 'Honda Civic 2020', price: 'R$ 95.000', image: '/images/carros/Honda Civic 2020.webp', year: '2020', km: '45.000 km', brand: 'Honda' },
  { id: 2, name: 'Toyota Corolla 2021', price: 'R$ 110.000', image: '/images/carros/Toyota Corolla 2021.jpg', year: '2021', km: '30.000 km', brand: 'Toyota' },
  { id: 3, name: 'Volkswagen Jetta 2019', price: 'R$ 88.000', image: '/images/carros/Volkswagen Jetta 2019.jpg', year: '2019', km: '55.000 km', brand: 'Volkswagen' },
  { id: 4, name: 'Ford Focus 2020', price: 'R$ 82.000', image: '/images/carros/Ford Focus 2020.jpg', year: '2020', km: '50.000 km', brand: 'Ford' },
  { id: 5, name: 'Chevrolet Onix 2021', price: 'R$ 75.000', image: '/images/carros/Chevrolet Onix 2021.webp', year: '2021', km: '35.000 km', brand: 'Chevrolet' },
  { id: 6, name: 'Fiat Argo 2022', price: 'R$ 68.000', image: '/images/carros/Fiat Argo 2022.jpg', year: '2022', km: '25.000 km', brand: 'Fiat' },
]

// Veículos em destaque na página inicial (primeiros 3)
export const featuredVehicles = vehicles.slice(0, 3)
