import React, { Component } from 'react';
import { WindoW, Panel, Divider } from '../sub-components/containers';
import { Menu as SelectMenu } from '../sub-components';

class Menu extends Component {
  state = {
    formatedMenu: {},
    selectedMenus: [],
    menus: [
      { name: 'APPETIZERS' },
      { name: 'Garlic Bread', price: 3.5 },
      { name: 'Garlic Bread with Cheese', price: 4 },
      { name: 'Fried Dough', price: 4.95 },
      { name: 'Buffalo Wings (10)', price: 9.95 },
      { name: 'Boneless Buffalo Wings', price: 8.95 },
      { name: 'Veggie Platter', price: 4.95 },
      {
        name: 'Sampler Basket',
        price: 8.95,
        desc: 'Mozzarella sticks, french fries and onion rings.'
      },
      {
        name: 'Nachos Supreme',
        price: 9.95,
        desc:
          'Crisp tortilla chips topped with beef and cheese. Served with salsa and sour cream.'
      },
      { name: 'Jalapeno Poppers', price: 8.95 },
      {
        name: 'Garlic Knots',
        price: 3,
        desc:
          '6 Pcs.Baked fresh and topped with garlic olive oil sauce sprinkled with parmesan cheese.'
      },
      {
        name: 'Bruschetta',
        price: 7.95,
        desc:
          'Fresh chopped tomato, garlic and basil tossed in olive oil served over fresh Italian cheese.'
      },
      {
        name: 'Potato Skins',
        price: 8.95,
        desc: 'Baked potato skins topped with cheese and bacon.'
      },
      { name: 'Chicken Tenders', price: 8.95 },
      { name: 'Mozzarella Sticks', price: 7.95 },
      { name: 'Fries', price: 3 },
      { name: 'Onion Rings', price: 4 },
      { name: 'Appetizer - Sauteed Broccoli', price: 4.95 },
      { name: 'Appetizer - Sauteed Spinach', price: 4.95 },
      { name: 'Appetizer - Sauteed Mushrooms', price: 4.95 },
      {
        name: 'Appetizer - Sausage',
        price: 4.95,
        desc: '2 pcs. Topped with plum tomato sauce and mozzarella.'
      },
      {
        name: 'Appetizer - Meatballs',
        price: 4.95,
        desc: '2 pcs. Topped with plum tomato sauce and mozzarella.'
      },
      { name: 'SOUPS' },
      { name: 'Tortellini Soup', price: 4.25 },
      { name: 'SALADS' },
      { name: 'House Salad', price: 5.95 },
      {
        name: 'Chef Salad',
        price: 8.95,
        desc: 'Our house salad topped with turkey, ham and mozzarella.'
      },
      {
        name: 'California Chicken Salad',
        price: 8.95,
        desc: 'Our house salad topped with grilled chicken and bacon.'
      },
      { name: 'Classic Caesar Salad', price: 6.95 },
      {
        name: 'Antipasto',
        price: 8.25,
        desc: 'Our house salad w/peppers, salami, and ham'
      },
      { name: 'Taco Salad', price: 8.95, desc: 'with ground beef' },
      { name: 'SANDWICHES' },
      {
        name: 'Sandwich',
        price: 7.95,
        desc: 'With lettuce and tomato and mayo.'
      },
      {
        name: 'Chicken BLT Sandwich',
        price: 8.95,
        desc: 'Your average BLT with grilled chicken.'
      },
      {
        name: 'California Chicken Sandwich',
        price: 8.95,
        desc: 'Grilled chicken with roasted red peppers and fresh mozzarella.'
      },
      {
        name: 'Chicken Jack Sandwich',
        price: 8.95,
        desc:
          'Grilled chicken with sauteed onions, peppers, bacon, spicy cheese.'
      },
      {
        name: 'Texas Chicken Sandwich',
        price: 8.95,
        desc: 'Grilled chicken with sauteed onions, bacon, cheese and BBQ.'
      },
      { name: 'Chicken Quesadilla Sandwich', price: 9.95 },
      {
        name: 'Philly Steak Combo Sandwich with Fries',
        price: 10.95,
        desc: 'Onions, peppers and mushrooms.'
      },
      { name: 'TRIPLE DECKER CLUBS' },
      { name: 'Hamburger Triple Decker Club', price: 8.95 },
      { name: 'Turkey Triple Decker Club', price: 8.95 },
      { name: 'Cooked Salami Triple Decker Club', price: 8.95 },
      { name: 'Ham Triple Decker Club', price: 8.95 },
      { name: 'Grilled Chicken Triple Decker Club', price: 8.95 },
      { name: 'BLT Triple Decker Club', price: 8.5 },
      { name: 'WRAPS - Served with fries.' },
      {
        name: 'Chicken Ranch Wrap',
        price: 8.95,
        desc: 'With lettuce and tomato.'
      },
      {
        name: 'Chicken Wrap',
        price: 8.95,
        desc: 'Grilled chicken with lettuce, tomato and cheese.'
      },
      {
        name: 'Philly Steak Wrap',
        price: 9.95,
        desc: 'Steak with sauteed mushrooms, onions, peppers and cheese.'
      },
      {
        name: 'Turkey & Bacon Wrap',
        price: 8.95,
        desc: 'Turkey and bacon with lettuce, tomato and cheese.'
      },
      {
        name: 'Chicken Caesar Wrap',
        price: 8.95,
        desc: 'Grilled chicken with Romaine, croutons and caesar dressing.'
      },
      {
        name: 'Roasted Veggie Wrap',
        price: 8.95,
        desc:
          'Sauteed onions, peppers, mushrooms, broccoli, spinach and cheese.'
      },
      {
        name: 'Buffalo Chicken Wrap',
        price: 8.95,
        desc:
          'Grilled chicken with buffalo sauce, blue cheese, lettuce and tomato.'
      },
      {
        name:
          'BURGERS -Served on toasted hard roll with fries, lettuce, tomato and mayo.'
      },
      { name: 'Hamburger', price: 7.95 },
      { name: 'Cheeseburger', price: 8.95 },
      {
        name: 'Texas Burger',
        price: 9.95,
        desc:
          'Fresh hamburger topped with sauteed onions, bacon, cheese and BBQ sauce.'
      },
      { name: 'Bacon Cheeseburger', price: 9.95 },
      {
        name: 'Germanos Burger',
        price: 9.95,
        desc: 'With sauteed onions, mushrooms, bacon and cheese.'
      },
      { name: 'GRINDERS - With lettuce, tomato and mayo.' },
      { name: 'Cheese Steak Grinder', price: 8.5 },
      { name: 'BLT Grinder', price: 7.5 },
      { name: 'Cheeseburger Grinder', price: 8.5 },
      { name: 'Salami Grinder', price: 7.95 },
      { name: 'Ham Grinder', price: 7.95 },
      { name: 'Turkey Grinder', price: 7.95 },
      { name: 'Italian Grinder', price: 7.95 },
      {
        name: 'Philly Steak Grinder',
        price: 8.5,
        desc: 'With mushrooms, onions and peppers.'
      },
      { name: 'Chicken Cutlet Grinder', price: 7.95 },
      { name: 'Chicken, Meatball, Sausage Parmigiana Grinder', price: 7.95 },
      { name: 'Eggplant Parmigiana Grinder', price: 7.95 },
      { name: 'PASTA ENTREES - Served with salad and bread.' },
      { name: 'Tortellini Alfredo', price: 13.95 },
      {
        name: 'Penne Alfredo',
        price: 13.5,
        desc: 'Tossed in our own alfredo sauce.'
      },
      {
        name: 'Penne Alla Vodka',
        price: 13.5,
        desc: 'Penne in a pink vodka sauce with proscuitto and onions.'
      },
      { name: 'Pasta With plum tomato sauce', price: 9.95 },
      { name: 'Pasta', price: 11.95, desc: 'With meatballs or sausage.' },
      {
        name: 'Chicken Parmigiana',
        price: 14.95,
        desc: 'Breaded cutlet topped with plum tomato sauce and mozzarella.'
      },
      { name: 'Eggplant Parmigiana', price: 12.95 },
      {
        name: 'Lasagna',
        price: 13.95,
        desc: 'Our own home made meat lasagna.'
      },
      { name: 'OVEN SPECIALTIES' },
      {
        name: 'Stromboli (Oven Specialty)',
        price: 9.5,
        desc:
          'Stuffed with mushrooms, onions, peppers, ham, pepperoni, mozzarella.'
      },
      {
        name: 'Spinach Wheel (Oven Specialty)',
        price: 9.5,
        desc: 'Stuffed with spinach, sausage, pepperoni, mozzarella.'
      },
      {
        name: 'Buffalo Chicken Roll (Oven Specialty)',
        price: 9.5,
        desc: 'Stuffed with chicken in our own buffalo sauce and mozzarella.'
      },
      {
        name: 'Calzone (Oven Specialty)',
        price: 7.5,
        desc: 'Stuffed with ricotta and mozzarella.'
      },
      { name: 'PIZZERIA' },
      { name: 'Cheese Pizza', price: 11.5 },
      {
        name: 'Special Combination Pizza',
        price: 18.95,
        desc:
          'Pepperoni, sausage, bacon, meatball, onion, pepper and mushrooms.'
      },
      { name: 'GOURMET PIZZAS' },
      {
        name: 'Tomato Basil Gourmet Pizza',
        price: 14.95,
        desc: 'Garlic, tomatoes, fresh basil and olive oil.'
      },
      {
        name: 'Pizza Binaco Gourmet Pizza',
        price: 14.95,
        desc: 'Ricotta, mozzarella, roasted garlic and parmigiana.'
      },
      {
        name: 'Bianca Broccoli Gourmet Pizza',
        price: 14.95,
        desc: 'Broccoli, ricotta, mozzarella, roasted garlic.'
      },
      {
        name: 'Vegetarian Gourmet Pizza',
        price: 15.95,
        desc: 'Broccoli, mushrooms, peppers, olives, spinach, eggplant.'
      },
      {
        name: 'Hawaiian Gourmet Pizza',
        price: 14.95,
        desc: 'Pineapple, Canadian bacon, mozzarella, tomato sauce.'
      },
      {
        name: 'Meat Lovers Gourmet Pizza',
        price: 16.95,
        desc: 'Pepperoni, sausage, meatball, bacon, mozzarella.'
      },
      {
        name: 'Buffalo Chicken Gourmet Pizza',
        price: 15.95,
        desc: 'Fresh diced chicken with our own buffalo sauce.'
      },
      {
        name: 'BBQ Chicken Gourmet Pizza',
        price: 15.95,
        desc: 'Fresh diced chicken with our own BBQ sauce.'
      },
      {
        name: 'Chicken Florentine Gourmet Pizza',
        price: 15.95,
        desc:
          'Fresh diced chicken, bacon, onions, tomatoes, mozzarella, ranch dressing.'
      },
      {
        name: 'Margarita Pizza Gourmet Pizza',
        price: 16.95,
        desc: 'Fresh mozzarella, fresh basil and marinara sauce.'
      }
    ]
  };

  componentDidMount() {
    this.formatMenu();
    // const { breakfastMenu } = this.state;
    // this.setState({ selectedMenus: breakfastMenu });
  }

  handleChangeMenu = key => {
    const { formatedMenu } = this.state;
    const selectedMenus = formatedMenu[key];
    this.setState({ selectedMenus });
  };

  formatMenu = () => {
    const { menus } = this.state;
    const formatedMenu = {};
    let curr;
    menus.forEach(item => {
      if (Object.keys(item).length === 1) {
        console.log(curr);
        curr = item.name;
        formatedMenu[item.name] = [
          <Divider
            border
            color='color-tirciary'
            backgroundColor="background-secondary"
            type="headline-4"
            text={item.name}
            key={item.name}
          ></Divider>
        ];
      } else {
        const { name, price, desc } = item;
        formatedMenu[curr].push(
          <div
            key={item.name}
            className="menu__item flex column align-center w-90 maxw-500px minw-325px p-10px background-primary"
          >
            <div className="menu__item__head align-center w-100 my-10px">
              <span className="body-1 color-tirciary">{name}</span>
              <span className="body-1 color-tirciary text-right">
                {this.formatPrice(price)}
              </span>
            </div>
            <span className="body-2 color-tirciary">{desc}</span>
          </div>
        );
      }
    });
    console.log(formatedMenu);
    this.setState({ formatedMenu });
  };

  formatPrice = price => {
    const priceStr = price.toString();

    if (priceStr.length < 4) {
      const priceStrArr = priceStr.split('.');

      if (priceStrArr.length <= 1) {
        return `${priceStrArr[0]}.00`;
      } else {
        return `${priceStrArr[0]}.${priceStrArr[1]}0`;
      }
    } else {
      return price;
    }
  };

  render() {
    const { menus, formatedMenu, selectedMenus } = this.state;
    return (
      <WindoW backgroundUrl="https://firebasestorage.googleapis.com/v0/b/germanos-76121.appspot.com/o/Tables.jpg?alt=media&token=389ab0ae-7643-480e-bb1e-fbd894515558">
        {/* <Flex row>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('breakfastMenu')}
            className={`${
              selectedMenus.length === 2 ? 'button' : 'button inverted'
            }`}
          >
            Breakfast
          </button>
          <button
            type="button"
            onClick={() => this.handleChangeMenu('lunchMenu')}
            className={`${
              selectedMenus.length === 2 ? 'button inverted' : 'button '
            }`}
          >
            Lunch & Dinner
          </button>
        </Flex> */}
        <Panel background='background-secondary'>
          <SelectMenu
            options={Object.keys(formatedMenu)}
            func={option => this.handleChangeMenu(option)}
          ></SelectMenu>
        </Panel>
        <div className="flex row wrap align-center">
          {selectedMenus.length < 1
            ? Object.values(formatedMenu).map(item => item)
            : selectedMenus}
        </div>
        <div className="flex row wrap justify-center align-center w-100"></div>
      </WindoW>
    );
  }
}

export default Menu;

