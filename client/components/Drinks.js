import React, { Component } from 'react';
import { WindoW, Panel, Divider } from '../sub-components/containers';

class Drinks extends Component {
  state = {
    drinks: {
      Domestic: [
        {
          name: 'Budwiser',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F4.bp.blogspot.com%2F-plgNkETgqSA%2FTtzo3oOnEqI%2FAAAAAAAACCA%2FYLeziwC1wT4%2Fs1600%2FBudweiser%2Bwallpaper-girzl.blogspot.com-wallpaper-05_1920x1200.jpg&f=1&nofb=1'
        },
        {
          name: 'Budlight',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fmedia-assets-01.thedrum.com%2Fcache%2Fimages%2Fthedrum-prod%2Fs3-news-tmp-85019-bud_light--2x1--800.jpg&f=1&nofb=1'
        },
        {
          name: 'Coorslight',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.adweek.com%2Fagencyspy%2Fwp-content%2Fuploads%2Fsites%2F7%2F2014%2F11%2FCoorsLightLogo.jpg&f=1&nofb=1'
        }
      ],
      Ciders: [
        {
          name: 'Downeast (unfiltered)',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnextpint.com%2Fwp-content%2Fuploads%2F2018%2F06%2FDowneast-Unfiltered-Craft-Cider-1.png&f=1&nofb=1'
        },
        {
          name: 'Angry Orchard',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.evbuc.com%2Feventlogos%2F3965356%2Fangryorchardlogo28129.jpg&f=1&nofb=1'
        }
      ],
      IPAs: [
        {
          name: 'Goose Island',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flindysbrews.files.wordpress.com%2F2015%2F05%2Fgoose-island-logo.png&f=1&nofb=1'
        },
        {
          name: 'Subduction',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.ohbeautifulbeer.com%2Fwp-content%2Fuploads%2F2017%2F05%2FOLBC-SUB-Port-Image.jpg&f=1&nofb=1'
        },
        {
          name: 'Stony Creek: Cranky',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstonycreekbeer.com%2Fwp-content%2Fuploads%2F2016%2F04%2F14-21901_TapHandle_RipeAndCranky.jpg&f=1&nofb=1'
        },
        {
          name: 'Thomas Hooker: #NoFilter',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhookerbeer.com%2Fwp-content%2Fthemes%2Fhooker%2Fimages%2Fpromo-beer-nofilter.jpg&f=1&nofb=1'
        },
        {
          name: "Lagunita's",
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F_M54XLqjBLNg%2FTQJDm391OrI%2FAAAAAAAABus%2Fz6FVkhK-Gfw%2Fs1600%2Flagunitas_logo.jpg&f=1&nofb=1'
        },
        {
          name: 'Counterweight: Headway',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.anconaswine.com%2Fimages%2Fsites%2Fanconaswine%2Flabels%2F-counter-weight-headway-ipa--counter-weight-headway-ipa_1.jpg&f=1&nofb=1'
        },
        {
          name: 'Two Roads: Lil Heaven',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fbeerpulse.com%2Fwp-content%2Fuploads%2F2014%2F05%2FLil-Heaven-can-575x314.png&f=1&nofb=1'
        }
      ],
      Other: [
        {
          name: 'Sam Adams',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fd1ynl4hb5mx7r8.cloudfront.net%2Fwp-content%2Fuploads%2F2015%2F10%2F05112658%2FSam-Adams-Oval-Logo.jpg&f=1&nofb=1'
        },
        {
          name: 'Sam Adams: Seasonal',
          image:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.breezethruobx.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F1%2Fimage%2F600x600%2F9df78eab33525d08d6e5fb8d27136e95%2Fs%2Fa%2Fsamuel-adams-seasonal.jpg&f=1&nofb=1'
        },
        {
          name: 'Yuengling',
          image:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.fLVDXihNAoLFP8YiyyHezgHaEo%26pid%3DApi&f=1'
        },
        {
          name: 'Taco Cat: Sour',
          image:
            'https://www.guysdrinkingbeer.com/wp-content/uploads/2017/05/02-finch-taco-cat-kettle-sour.jpg'
        }
      ]
    }
  };

  render() {
    const { drinks } = this.state;
    return (
      <WindoW background="background-secondary">
        <div className="flex column wrap align-center justify-center w-100">
          {Object.keys(drinks).map(category => {
            return (
              <div className="flex column wrap w-100">
                <Divider backgroundColor="background-primary">
                  <span className="headline-3 color-tercirary">{category}</span>
                </Divider>
                <div className="flex row wrap w-100 my-20px">
                  {drinks[category].map(drink => {
                    const { name, image } = drink;
                    return (
                      <div className="flex column wrap m-auto">
                        <img className="drink__image" src={image}></img>
                        <span className="headline-5 color-tercirary">
                          {name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </WindoW>
    );
  }
}

export default Drinks;
