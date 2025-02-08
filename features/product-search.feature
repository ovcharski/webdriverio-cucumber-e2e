Feature: Product Search
  Scenario Outline: Search for products with SKUs
    Given I navigate to the shop page
    When I search for "<searchQuery>"
    Then I should see product with SKU "<sku>"
    And I should be on product page "<url>"

    Examples:
      | searchQuery        | sku                   | url                                                                 |
      | Album              | woo-album             | https://ovcharski.com/shop/product/album/                         |
      | Beanie with Logo   | Woo-beanie-logo       | https://ovcharski.com/shop/product/beanie-with-logo/              |
      | Shirt Green        | woo-fasion-shirt-green| https://ovcharski.com/shop/product/shirt-green/                   |
      | Shoes              | woo-fasion-shoes      | https://ovcharski.com/shop/product/shoes/                         |
      | Socks              | woo-fasion-socks      | https://ovcharski.com/shop/product/socks/                         |
      | V-Neck             | woo-vneck-tee         | https://ovcharski.com/shop/product/v-neck-t-shirt/                |
      | Pennant            | wp-pennant            | https://ovcharski.com/shop/product/wordpress-pennant/             |