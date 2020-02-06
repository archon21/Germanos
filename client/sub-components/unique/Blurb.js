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
        <span className="body-2 color-tirciary w-100">
          The story began over 20 years....
        </span>
        <br></br>
        <span className="body-2 color-tirciary w-100">
          Johnny had the opportunity to learn about New york style pizza and
          italian food from living New Haven for a few years, with some help
          from a chef from Italy. Johny then learned about running a restaurant
          from working as a Head Chef in Old Saybrook, during that time, he got
          acquainted with a man from Colchester who wanted him to run his
          restaurant and he fell in love with the beautiful scenery, people and
          nature of the town, and decided to move there himself.
        </span>
        <br></br>
        <span className="body-2 color-tirciary w-100">
          After being confident in his own ideas for a business, he decided to
          take a shot at it, setting up shop in Pawcatuck, then to Norwich and
          finally setting on Colchester After Johnny contacted his good friend
          Luis that he knew for more than 16 years, Johnny talked to Luis about
          becoming a business partner for Germanos, knowing of Luis goals of
          creating a successful business and more.
        </span>
        <br></br>
        <span className="body-2 color-tirciary w-100">
          And this how Germanos of Colchester got its start, and the rest is
          history, after almost 11 years serving Colchester and our local
          community, he is blessed for him and his business to continue being
          part of this community. He is thankful to everyone that has helped
          this business thrive, please visit for New York style pizza, Burgers,
          Wings, Pastas and more…
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
    <div className="py-20px">
      <span className="body-1">
        We have 7 pool tables open Sunday through Thursday, as well as host
        multiple APA Teams in 9 Ball and 8 Ball formats, as well as an In-House
        League.
      </span>
    </div>
  );
};

const BarBlurb = props => {
  return (
    <div className="py-20px">
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
    <div className="py-20px">
      <span className="body-1">
        We have 7 pool tables open Sunday through Thursday, as well as host
        multiple APA Teams in 9 Ball and 8 Ball formats, as well as an In-House
        League.
      </span>
    </div>
  );
};

export { Blurb, BillardBlurb, BarBlurb, CateringBlurb };
