import Calendar from "../../../../../components/Calendar/Calendar";
import Card from "../../../../../components/Card/Card";
import MenuParams from "../../../../../components/MenuParams/MenuParams";
import BandeauHotel from "../../../../../components/BandeauHotel/BandeauHotel";
import Prestataire from "../../../../../components/Prestataire/Prestataire";
import SideBar from "../../../../../components/SideBar/SideBar";
import Pieds from '../../../../../assets/pieds.jpeg'


function PrestaFav() {

    const fav = [{
        first_name: 'greg',
        last_name: 'dal',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
    {
        first_name: 'joe',
        last_name: 'doe',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
    {
        first_name: 'joe',
        last_name: 'doe',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
    {
        first_name: 'joe',
        last_name: 'doe',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
    {
        first_name: 'joe',
        last_name: 'doe',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
    {
        first_name: 'joe',
        last_name: 'doe',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
    {
        first_name: 'joe',
        last_name: 'doe',
        note: 5,
        pic: Pieds,
        link: '#',
        soins: ['chia-tsu', 'thai']
    },
]
return (
    <div className="App">
        <div className="flex w-full">
        <SideBar title="ESPACE HOTEL" name="Greg" variant="gold"></SideBar>

        <div className="w-full">
            <BandeauHotel />
            <div className="flex items-center justify-center w-full h-28 border-t border-b border-gray-300">
            <h1 className="text-xl">Mes prestataires favoris</h1>
        </div>

          <div className="xl:flex p-4">
            <div className="xl:w-1/2">
              <span className="text-center text-lg">Mes prestataires favoris</span>
              <div className='mt-4 xl:mr-2'>
                <Card>
                  <div style={{height: '41.7rem'}} className="p-4 overflow-scroll">
                      <ul>
                      {fav.map( (item, index) => {
                          return(<li className='my-2 flex items-center'>
                              <div className='rounded-full bg-green-700 w-8 h-8 flex items-center justify-center mr-4 text-white'>{index + 1}</div>
                            <Prestataire data={item} />
                        </li>)
                      })}
                      </ul>
                  </div>
                </Card>
              </div>
            </div>


            <div className="xl:w-1/2">
              <p className="text-center text-lg">Tous les prestataires</p>
              <div className='mt-4 xl:ml-2'>
                <Card>
                  <div className="p-4 h-96 overflow-scroll">
                      <ul>
                      {fav.map( (item, index) => {
                        return(<li className='my-2 flex items-center'>
                            <Prestataire data={item} />
                        </li>)
                      })}
                      </ul>
                  </div>
                </Card>
              </div>

              <p className="text-center text-lg mt-6">Prestataires blacklistés</p>
              <div className='mt-2 ml-2'>
                <Card>
                  <div className="p-4 h-56 overflow-scroll">
                      <ul>
                      {fav.map( (item, index) => {
                        return(<li className='my-2 flex items-center'>
                            <Prestataire data={item} />
                        </li>)
                      })}
                      </ul>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrestaFav;
