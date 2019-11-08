const defaultState = {
  phone: '860.207.2018',
  company: 'Germanos Bar & Grill',
  email: '',
  address: ['493 Westchester Rd', 'Colchester, CT 06415-2434'],
  hours: {
    S: '11 AM - 1 AM',
    M: '11 AM - 1 AM',
    T: '11 AM - 1 AM',
    W: '11 AM - 1 AM',
    TH: '11 AM - 1 AM',
    F: '11 AM - 2 AM',
    SA: '11 AM - 2 AM'
  },
  reviews: [
    {
      author_name: 'Jessica Ivancso',
      author_url:
        'https://www.google.com/maps/contrib/103903117181763135477/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh6.ggpht.com/-WxFZZWs4v4g/AAAAAAAAAAI/AAAAAAAAAAA/Ax1nxeP5Og4/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg',
      rating: 4,
      relative_time_description: 'a month ago',
      text:
        "New to the area, we checked out Maria's for breakfast. The omelettes and waffles were sweet and delicious. The service was friendly and can take on larger crowds in their backyard area with outside eating. Returned a few days later for dinner and had steak and pasta. It was all good.",
      time: 1569193635
    },
    {
      author_name: 'Autumn Rain',
      author_url:
        'https://www.google.com/maps/contrib/108869238099136544751/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh4.ggpht.com/-vGHR48ypAw4/AAAAAAAAAAI/AAAAAAAAAAA/nc626GoSqso/s128-c0x00000000-cc-rp-mo/photo.jpg',
      rating: 1,
      relative_time_description: 'a month ago',
      text:
        "Gross. Went in for breakfast. Got 2 eggs on a bagel and the bagel was horrible quality and soggy. The restaurant was empty except for one customer/employee. Couldn't tell. They were talking to my waitress as if they've known each other for a while. Cook did not look hygienic at all. I honestly did not want to eat my food after noticing him but I was starving. Managed to eat 1/4 of my breakfast before deciding to take the loss. Waitress was bland at best. Do yourself a favor and just go to Diane's 10 seconds down the road.",
      time: 1570519465
    },
    {
      author_name: 'daisy soucy',
      author_url:
        'https://www.google.com/maps/contrib/102613747701860356267/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh6.ggpht.com/-74wBqnMr5LM/AAAAAAAAAAI/AAAAAAAAAAA/R9jHbhTqfHM/s128-c0x00000000-cc-rp-mo/photo.jpg',
      rating: 5,
      relative_time_description: '3 months ago',
      text:
        'Recently this summer I had them cater my wedding. Everything was hot and fresh. They had great communication through the whole process and was very helpful I would highly recommend for any kind of party or event they have a wide variety of options too!',
      time: 1564889997
    },
    {
      author_name: 'Sheila Mcintosh',
      author_url:
        'https://www.google.com/maps/contrib/114245071125829667036/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh3.ggpht.com/-0UskbR-PgD8/AAAAAAAAAAI/AAAAAAAAAAA/7P_2cxJGEhA/s128-c0x00000000-cc-rp-mo/photo.jpg',
      rating: 4,
      relative_time_description: 'a month ago',
      text:
        'Found on my way home. Ordered a hot 1/2 turkey grinder. It was wonderful. Was gone before I got home. Yum',
      time: 1569478002
    },
    {
      author_name: 'Alex',
      author_url:
        'https://www.google.com/maps/contrib/118425348357032625174/reviews',
      language: 'en',
      profile_photo_url:
        'https://lh5.ggpht.com/-VwYansHM_Vk/AAAAAAAAAAI/AAAAAAAAAAA/jbqiA989puI/s128-c0x00000000-cc-rp-mo-ba3/photo.jpg',
      rating: 5,
      relative_time_description: 'a month ago',
      text:
        'Antipasto salad is out of this world, and they also have amazing grinders! Always friendly staff and very attentive',
      time: 1568118762
    }
  ]
};

export default function(state = defaultState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
