import { View, Text, StyleSheet, Pressable } from 'react-native';

const Navbar = ({ cartCount, onOpenCart, onOpenProfile }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.logo}>
        <Text style={styles.logoHC}>HC </Text>
        <Text style={styles.logoStore}>STORE</Text>
      </Text>

      <View style={styles.actions}>
        <Pressable
          style={styles.actionButton}
          onPress={onOpenProfile}
        >
          <Text style={styles.actionIcon}>♙</Text>
          <Text style={styles.actionText}>Perfil</Text>
        </Pressable>

        <Pressable
          style={styles.actionButton}
          onPress={onOpenCart}
        >
          <View style={styles.cartIconContainer}>
            <Text style={styles.actionIcon}>🛒</Text>

            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>
                  {cartCount}
                </Text>
              </View>
            )}
          </View>

          <Text style={styles.actionText}>Carrinho</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    minHeight: 90,
    backgroundColor: '#111111',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  logo: {
    fontSize: 23,
    fontWeight: '900',
    letterSpacing: 1,
  },

  logoHC: {
    color: '#ffffff',
  },

  logoStore: {
    color: '#00cc66',
  },

  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionIcon: {
    color: '#ffffff',
    fontSize: 21,
  },

  actionText: {
    color: '#ffffff',
    fontSize: 11,
    marginTop: 3,
  },

  cartIconContainer: {
    position: 'relative',
  },

  cartBadge: {
    position: 'absolute',
    top: -7,
    right: -9,
    backgroundColor: '#006B3C',
    minWidth: 17,
    height: 17,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },

  cartBadgeText: {
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default Navbar;
