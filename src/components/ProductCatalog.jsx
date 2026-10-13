import { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
  StyleSheet,
} from 'react-native';

const categories = [
  'Todos',
  'Camisas',
  'Calças',
  'Bermudas',
  'Casual',
  'Streetwear',
  'Chinelos',
];

export default function ProductCatalog({ products, onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts =
    selectedCategory === 'Todos'
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );

  function formatPrice(price) {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  if (selectedProduct) {
    return (
      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Pressable
          style={styles.backButton}
          onPress={() => setSelectedProduct(null)}
        >
          <Text style={styles.backButtonText}>
            ← Voltar aos produtos
          </Text>
        </Pressable>

        <Image
          source={selectedProduct.image}
          style={styles.detailsImage}
          resizeMode="cover"
        />

        <Text style={styles.detailsCategory}>
          {selectedProduct.category}
        </Text>

        <Text style={styles.detailsName}>
          {selectedProduct.name}
        </Text>

        <Text style={styles.detailsPrice}>
          {formatPrice(selectedProduct.price)}
        </Text>

        <Text style={styles.descriptionTitle}>
          Descrição
        </Text>

        <Text style={styles.description}>
          {selectedProduct.description}
        </Text>

        <Pressable
          style={styles.buyButton}
          onPress={() => onAddToCart(selectedProduct)}
        >
          <Text style={styles.buyButtonText}>COMPRAR</Text>
        </Pressable>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.title}>Nossos produtos</Text>

      <Text style={styles.subtitle}>
        Encontre seu próximo estilo.
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <Pressable
              key={category}
              style={[
                styles.categoryButton,
                isSelected && styles.categoryButtonSelected,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  isSelected && styles.categoryTextSelected,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <Text style={styles.resultCount}>
        {filteredProducts.length}{' '}
        {filteredProducts.length === 1 ? 'produto' : 'produtos'}
      </Text>

      <View style={styles.productsGrid}>
        {filteredProducts.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Pressable
              onPress={() => setSelectedProduct(product)}
            >
              <Image
                source={product.image}
                style={styles.productImage}
                resizeMode="cover"
              />

              <View style={styles.productInfo}>
                <Text style={styles.productCategory}>
                  {product.category}
                </Text>

                <Text style={styles.productName}>
                  {product.name}
                </Text>

                <Text style={styles.productPrice}>
                  {formatPrice(product.price)}
                </Text>
              </View>
            </Pressable>

            <Pressable
              style={styles.buyButton}
              onPress={() => setSelectedProduct(product)}
            >
              <Text style={styles.buyButtonText}>
                VER PRODUTO
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingBottom: 32,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#111111',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#666666',
    marginTop: 6,
    marginBottom: 18,
  },

  categoriesContainer: {
    marginBottom: 16,
    flexGrow: 0,
  },

  categoriesContent: {
    gap: 8,
    paddingRight: 8,
  },

  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
  },

  categoryButtonSelected: {
    backgroundColor: '#111111',
    borderColor: '#111111',
  },

  categoryText: {
    color: '#333333',
    fontSize: 13,
    fontWeight: '600',
  },

  categoryTextSelected: {
    color: '#ffffff',
  },

  resultCount: {
    color: '#666666',
    fontSize: 13,
    marginBottom: 12,
  },

  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  productCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    paddingBottom: 12,
    elevation: 2,
  },

  productImage: {
    width: '100%',
    height: 175,
    backgroundColor: '#eeeeee',
  },

  productInfo: {
    padding: 10,
  },

  productCategory: {
    color: '#777777',
    fontSize: 11,
    marginBottom: 5,
  },

  productName: {
    color: '#222222',
    fontSize: 14,
    fontWeight: '600',
    minHeight: 36,
  },

  productPrice: {
    color: '#198754',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },

  buyButton: {
    backgroundColor: '#004D2B',
    marginHorizontal: 10,
    marginTop: 4,
    paddingVertical: 11,
    borderRadius: 6,
    alignItems: 'center',
  },

  buyButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 12,
  },

  detailsContainer: {
    padding: 20,
    paddingBottom: 40,
  },

  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 18,
    paddingVertical: 8,
  },

  backButtonText: {
    color: '#222222',
    fontSize: 15,
    fontWeight: '600',
  },

  detailsImage: {
    width: '100%',
    height: 340,
    borderRadius: 12,
    backgroundColor: '#eeeeee',
  },

  detailsCategory: {
    color: '#198754',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 20,
  },

  detailsName: {
    color: '#111111',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 8,
  },

  detailsPrice: {
    color: '#198754',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },

  descriptionTitle: {
    color: '#111111',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },

  description: {
    color: '#555555',
    fontSize: 15,
    lineHeight: 23,
  },
});
