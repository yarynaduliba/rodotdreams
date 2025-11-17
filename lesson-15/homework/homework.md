XPath
Test Case 1:
'Adding item to basket'
1. Go to Home page: '//img[@alt='Rozetka Logo']';
2. Click on '//input[@name='search']';
3. Enter 'iPhone 16' click on '//button[@type='submit']';
4. Click on '//a[contains(@title, '16 Pro Max 256GB Desert')]'
5. Verify '//h1[contains(text(), 'iPhone 16 Pro Max 256GB Desert Titanium')]' is present;
6. Click on '//span[contains(text(), 'Купити')]'
7. Verify '//h2[contains(text(), 'Кошик')]' is present;
8. Click on '//rz-modal-close-btn/button'
9. Click on '//li/button[contains(@aria-label, 'Відкрити корзину')]'
10. Verify '//div[@class = 'cart-product']/div/div/rz-button-product-page/rz-indexed-link/a/span[contains(text(), 'iPhone 16 Pro Max 256GB Desert Titanium'')]' is present;

Test Case 2:
'Adding item to Comparing list'
1. Go to Home page: '//img[@alt='Rozetka Logo']';
2. Click on '//input[@name='search']';
3. Enter 'Кавоварка' click on '//button[@type='submit']';
4. Click on '(//div[@class='item']//button[contains(@class, 'compare')])[1]';
5. Click on '(//div[@class='item']//button[contains(@class, 'compare')])[2]';
6. Click on '//a[@title = 'Списки порівнянь']';
7. Verify '//h1[contains(text(), 'Списки порівнянь')]' is present;
8. Verify '//span[@class = 'text-base' and contains(text(), '2')]' is present;

CSS
Test Case 1:
'Adding item to basket'
1. Go to Home page: 'img[alt="Rozetka Logo"]';
2. Click on 'input[name="search"]';
3. Enter 'iPhone 16' click on 'button[type="submit"]';
4. Click on 'a[title*='16 Pro Max 256GB Desert']';
5. Verify 'div[class= "product-about__title"]' is present;
6. Click on 'rz-product-buy-btn rz-buy-button button[aria-label*='Купити']'
7. Verify 'div h2[class = "h2 border padding text-inline"]' is present;
8. Click on 'rz-modal-close-btn button'
9. Click on 'button[aria-label = "Відкрити корзину"]' 
10. Verify 'span[class="cart-product__title"]' is present;

Test Case 2:
'Adding item to Comparing list'
1. Go to Home page: 'img[alt="Rozetka Logo"]';
2. Click on 'input[name="search"]';
3. Enter 'iPhone 16' click on 'button[type="submit"]';
4. Click on 'button[aria-label="Перемістити у список порівняння"]';
5. Click on 'a[title="Списки порівнянь"]';
6. Verify 'h1[class="h1 mb-4"]' is present;
8. Verify 'span[class="text-base"]' is present;
