import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define your navigation and route types
type RestaurantStackParamList = {
  Restaurant: { restaurantId: string };
};

type DashboardNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RestaurantStackParamList>,
  StackNavigationProp<any>
>;

type DashboardProps = {
  navigation: DashboardNavigationProp;
  route: RouteProp<any, any>;
};

const Dashboard: React.FC<DashboardProps> = ({ navigation }) => {
  const [scrollY] = useState(new Animated.Value(0));

  const restaurants = [
    {
      id: '1',
      name: 'Delight Eatery',
      rating: 4.5,
      image: require('../assets/images/bread.jpg'),
      distance: 1.2, // km
    },
    {
      id: '2',
      name: 'Taste Haven',
      rating: 4.0,
      image: require('../assets/images/rice.jpg'),
      distance: 1.5, // km
    },
    {
      id: '3',
      name: 'Food Palace',
      rating: 5.0,
      image: require('../assets/images/leaf.jpg'),
      distance: 0.8, // km
    },
    {
      id: '4',
      name: 'Flakkys Place',
      rating: 4.5,
      image: require('../assets/images/bread.jpg'),
      distance: 1.3, // km
    },
  ];

  const renderRestaurant = ({ item }: { item: { id: string; name: string; rating: number; image: any; distance: number } }) => {
    const renderStars = (rating: number) => {
      const stars = [];
      for (let i = 0; i < 5; i++) {
        if (i < Math.floor(rating)) {
          stars.push(<Ionicons key={i} name="star" size={14} color="#ff5500" />);
        } else if (i < rating) {
          stars.push(<Ionicons key={i} name="star-half" size={14} color="#ff5500" />);
        } else {
          stars.push(<Ionicons key={i} name="star-outline" size={14} color="#ff5500" />);
        }
      }
      return stars;
    };

    return (
      <View style={styles.restaurantCard}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.restaurantImage} />
          <TouchableOpacity
            style={styles.roundIcon}
            onPress={() => navigation.navigate('Restaurant', { restaurantId: item.id })}
          >
            <Ionicons name="arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.restaurantInfoContainer}>
          {/* Left Section: Restaurant Name and Rating */}
          <View style={styles.leftSection}>
            <Text style={styles.restaurantName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              {renderStars(item.rating)}
            </View>
          </View>
          {/* Right Section: Distance (km) */}
          <View style={styles.rightSection}>
            <Text style={styles.restaurantDistance}>{`${item.distance} km`}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Profile Icon */}
      <Animated.View
        style={[
          styles.header,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 150],
                  outputRange: [0, -150],
                  extrapolate: 'clamp',
                }),
              },
            ],
          },
        ]}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={30} color="#333" />
        </TouchableOpacity>
        <View>
          <Text style={styles.deliverToText}>Deliver to:</Text>
          <Text style={styles.addressText}>Bethel Hall, Babcock</Text>
        </View>
      </Animated.View>

      {/* Content */}
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.scrollContent}
        ListHeaderComponent={
          <>
            {/* Search Bar */}
            <Animated.View
              style={[
                styles.searchContainer,
                {
                  marginTop: scrollY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [30, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ]}
            >
              <TextInput
                style={styles.searchInput}
                placeholder="Search for a vendor or product"
              />
              <Ionicons name="search" size={20} color="#111010" style={styles.searchIcon} />
            </Animated.View>

            {/* Popular Eatery Section */}
            <View style={styles.popularSection}>
              <View style={styles.popularHeader}>
                <Text style={styles.popularText}>Popular Eatery</Text>
                <TouchableOpacity>
                  <Text style={styles.viewAllText}>View All</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20, // Adjusted to ensure the profile icon is visible and not leaving the screen
    paddingTop: 80, // Added paddingTop for better spacing from the top of the screen
  },
  deliverToText: {
    fontSize: 14,
    color: '#777',
  },
  addressText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    backgroundColor: '#F1F1F1',
    borderRadius: 30,
    paddingLeft: 15,
    paddingRight: 10,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  popularSection: {
    flex: 1,
  },
  popularHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  popularText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    fontSize: 14,
    color: '#ff5500',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  restaurantCard: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    elevation: 3,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 250,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  roundIcon: {
    position: 'absolute',
    bottom: -9,
    right: -6,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: '#000',
  },
  restaurantInfoContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  leftSection: {
    flex: 2, // Take more space for name and rating
    alignItems: 'flex-start',
  },
  restaurantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  rightSection: {
    alignItems: 'flex-end',
    flex: 1,
  },
  restaurantDistance: {
    fontSize: 14,
    fontWeight: '500',
    color: '#555',
  },
});

export default Dashboard;
