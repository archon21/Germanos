import React from 'react';

const Blurb = props => {
  const { footer, address } = props;
  return (
    <div
      className={`${
        footer ? 'footer__item' : 'w-100'
      } flex column align-center py-15px`}
    >
      <div className="flex column align-center px-15px w-100">
        <span className="body-1 color-tirciary w-100">
          Germano's Bar & Grill, one of the top Italian restaurants in
          Colchester, has been delighting patrons from around the world for 20
          years. Germano's Bar & Grill is a family restaurant serving
          mouth-watering fast food dishes like pizza and pasta that you and your
          family will enjoy. We also Italian Restauranthave signature dishes
          that you can see in our restaurant menu. Aside from the great tasting
          dishes that we serve, Germano's Bar & Grill is also known for its bar
          and grill services. You can enjoy various bar drinks while playing
          billiards with your friends and loved ones. Indeed, Germano's Bar &
          Grill is your one stop destination where you can relax and while
          eating your favorite Italian dishes. Come experience our fine cuisine
          in a warm and casual atmosphere. At Germano's Bar & Grill, we have a
          passion for flavor.
        </span>
        <br />
        <span className="body-1 text-center color-tirciary">{address[0]}</span>
        <span className="body-1 text-center color-tirciary">{address[1]}</span>
      </div>
    </div>
  );
};

const BillardBlurb = props => {
  return (
    <div  className='py-20px'>
      <span className="body-1">
        Aside from the great tasting array of Italian fast food dishes,
        Germano's Bar & Grill also has billiards tables that you may enjoy while
        munching on our classic Italian pizza. At Germano's Bar & Grill, your
        dining experience will have an exciting twist because you can play
        billiards with your friends while you’re inside our restaurant. We have
        several pool tables that are available for our customers. You can also
        check out our wine bar. We’re serving classic Italian wines that you
        will surely enjoy. We serve Italian Pinot Noir, Merlot, Cabernet
        Sauvignon, Chardonnay and Champagne & Sparkling Wines Come visit
        Germano's Bar & Grill in Colchester, CT for billiards, food, drinks, and
        fun!
      </span>
    </div>
  );
};

const BarBlurb = props => {
  return (
    <div  className='py-20px'>
      <span className="body-1">
        Aside from being an authentic Italian restaurant, we are also known as a
        great bar & grill restaurant in Colchester, CT. Cocktails and beers are
        available in our cocktail bar located near our wine bar where in we
        serve various authentic Italian drinks. You should also check out and
        taste our Italian fast food including pizza creations, cold and hot subs
        and grilled panini sandwiches. Billiards tables are also available here
        which you can enjoy while inside the restaurant. Contact Germano's Bar &
        Grill in Colchester, CT today to learn more about Italian food and
        drinks. Stop by today!
      </span>
    </div>
  );
};

const CateringBlurb = props => {
  return (
    <div className='py-20px'>
      <span className='body-1'>
        Germano's Bar & Grill is serving Italian fast food dishes that you and
        your whole family will enjoy, whether for lunch, dinner or any time of
        the day! We create dishes that you’ll surely love like classic Italian
        pizza topped with different kinds of cheeses and herbs. Of course, pasta
        dishes are also available here. We have various sauces depending on your
        taste. You can check out our menu for other delicious food choices and
        finds. We also offer catering service in Colchester, CT. Contact
        Germano's Bar & Grill today to learn more about our catering services
        and fast food selections in Colchester, CT.
      </span>
    </div>
  );
};

export { Blurb, BillardBlurb, BarBlurb, CateringBlurb };
