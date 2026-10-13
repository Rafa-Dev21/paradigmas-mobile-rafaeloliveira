import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Pressable, ScrollView } from 'react-native';

import Navbar from './src/components/Navbar';
import ProductCatalog from './src/components/ProductCatalog';

const products = [
  {
    id: '1',
    name: 'Calça Jeans Masculina',
    price: 129.90,
    category: 'Calças',
    image: 'https://placehold.co/400x500/eeeeee/111111?text=Calca+Jeans',
    description: 'Calça jeans masculina com visual moderno, ideal para combinar com diferentes estilos. Confira o tamanho antes de comprar.',
  },
  {
    id: '2',
    name: 'Camiseta Streetwear',
    price: 79.90,
    category: 'Camisas',
    image: 'https://placehold.co/400x500/e5e5e5/111111?text=Camiseta',
    description: 'Camiseta de estilo urbano, ideal para montar looks casuais e streetwear no dia a dia.',
  },
  {
    id: '3',
    name: 'Bermuda Casual',
    price: 89.90,
    category: 'Bermudas',
    image: 'https://placehold.co/400x500/dcdcdc/111111?text=Bermuda',
    description: 'Bermuda casual versátil, pensada para compor combinações confortáveis em momentos de lazer.',
  },
  {
    id: '4',
    name: 'Tênis Casual',
    price: 199.90,
    category: 'Casual',
    image: 'https://placehold.co/400x500/eeeeee/111111?text=Tenis+Casual',
    description: 'Tênis casual para complementar diferentes combinações, do visual básico ao urbano.',
  },
  {
    id: '5',
    name: 'Moletom Streetwear',
    price: 159.90,
    category: 'Streetwear',
    image: 'https://placehold.co/400x500/d6d6d6/111111?text=Moletom',
    description: 'Moletom com inspiração streetwear, ideal para criar um visual urbano e descontraído.',
  },
  {
    id: '6',
    name: 'Chinelo Básico',
    price: 39.90,
    category: 'Chinelos',
    image: 'https://placehold.co/400x500/e5e5e5/111111?text=Chinelo',
    description: 'Chinelo básico para usar em momentos de descanso e no dia a dia.',
  },
  {
    id: '7',
    name: 'Camisa Casual',
    price: 99.90,
    category: 'Casual',
    image: 'https://placehold.co/400x500/dcdcdc/111111?text=Camisa',
    description: 'Camisa casual que combina com diferentes peças para compor um visual versátil.',
  },
  {
    id: '8',
    name: 'Calça Streetwear',
    price: 149.90,
    category: 'Streetwear',
    image: 'https://placehold.co/400x500/eeeeee/111111?text=Calca+Urbana',
    description: 'Calça de inspiração urbana, indicada para combinações modernas e streetwear.',
  },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [screen, setScreen] = useState('catalog');

  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setScreen('cart');
  }

  function changeQuantity(productId, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setScreen('cart')}
        onOpenProfile={() => setScreen('profile')}
      />

      {screen === 'catalog' && (
        <ProductCatalog
          products={products}
          onAddToCart={addToCart}
        />
      )}

      {screen === 'cart' && (
        <ScrollView contentContainerStyle={styles.page}>
          <Text style={styles.title}>Meu carrinho</Text>

          {cart.length === 0 ? (
            <Text style={styles.emptyText}>
              Seu carrinho está vazio.
            </Text>
          ) : (
            <>
              {cart.map((item) => (
                <View key={item.id} style={styles.cartItem}>
                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>
                      {formatPrice(item.price)}
                    </Text>
                    <Text style={styles.quantity}>
                      Quantidade: {item.quantity}
                    </Text>
                  </View>

                  <View style={styles.quantityButtons}>
                    <Pressable
                      style={styles.quantityButton}
                      onPress={() => changeQuantity(item.id, -1)}
                    >
                      <Text style={styles.quantityButtonText}>−</Text>
                    </Pressable>

                    <Pressable
                      style={styles.quantityButton}
                      onPress={() => changeQuantity(item.id, 1)}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </Pressable>
                  </View>
                </View>
              ))}

              <Text style={styles.total}>
                Total: {formatPrice(cartTotal)}
              </Text>

              <Pressable
                style={styles.mainButton}
                onPress={() => setScreen('catalog')}
              >
                <Text style={styles.mainButtonText}>
                  CONTINUAR COMPRANDO
                </Text>
              </Pressable>
            </>
          )}

          <Pressable
            style={styles.backButton}
            onPress={() => setScreen('catalog')}
          >
            <Text style={styles.backButtonText}>
              Voltar ao catálogo
            </Text>
          </Pressable>
        </ScrollView>
      )}

      {screen === 'profile' && (
        <View style={styles.page}>
          <Text style={styles.title}>Meu perfil</Text>
          <Text style={styles.emptyText}>
            Sua área de perfil HC Store.
          </Text>
          <Text style={styles.profileDescription}>
            A tela está preparada. O login e os dados do usuário
            poderão ser integrados posteriormente.
          </Text>

          <Pressable
            style={styles.mainButton}
            onPress={() => setScreen('catalog')}
          >
            <Text style={styles.mainButtonText}>
              VOLTAR AO CATÁLOGO
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  page: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111111',
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 16,
  },
  profileDescription: {
    fontSize: 15,
    color: '#555555',
    lineHeight: 23,
    marginBottom: 20,
  },
  cartItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
    paddingRight: 8,
  },
  itemName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  itemPrice: {
    fontSize: 15,
    color: '#006B3C',
    marginTop: 6,
  },
  quantity: {
    fontSize: 13,
    color: '#666666',
    marginTop: 6,
  },
  quantityButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: 6,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  total: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#111111',
    textAlign: 'right',
    marginTop: 12,
    marginBottom: 20,
  },
  mainButton: {
    backgroundColor: '#006B3C',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 10,
  },
  mainButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },
  backButton: {
    alignSelf: 'flex-start',
    paddingVertical: 14,
  },
  backButtonText: {
    color: '#222222',
    fontSize: 15,
    fontWeight: '600',
  },
});
