import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import Preloader from '../../Components/Preloader/Preloader';
import { MainStyled } from '../../Styling/MainStyled';
import { HomeStyled } from './HomeStyled';

const Home = ({}) => {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading ? (
        <Preloader setLoading={setLoading} />
      ) : (
        <HomeStyled>
          <MainStyled>
            <Banner />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            recusandae hic, tenetur nihil autem sapiente nisi a magnam nulla
            facilis fugit perferendis similique in veritatis aspernatur dolores
            iusto veniam eum alias minima, iure eius inventore ex. Sed quidem
            modi perspiciatis dolores molestias sequi harum alias hic esse.
            Nesciunt hic nulla quas ut fugit eius doloribus quo id earum saepe.
            Similique necessitatibus quibusdam quisquam dolorum quos ullam
            molestiae harum in obcaecati, numquam, dolores iusto rem eum ab est
            reiciendis ratione corrupti, fugiat perferendis quidem provident
            esse dolor. Blanditiis eius suscipit saepe. Nobis nulla sunt
            similique repellat, corrupti voluptatum numquam autem quis magnam
            amet natus veniam dolore atque voluptate, est ab ipsa repellendus
            pariatur. Repellat delectus tempora non consequuntur eius
            reiciendis, hic nam maiores sit voluptate minus impedit consequatur?
            Nulla, a error. Nam quasi nihil, rem id non quod quos cupiditate
            nostrum dolores doloremque, eius mollitia neque aliquam, excepturi
            ratione quaerat deleniti laboriosam omnis. Odit omnis nemo quis
            facilis itaque alias velit necessitatibus adipisci nobis, a deleniti
            consectetur quas laborum illum sit error natus, eveniet soluta dolor
            dolore incidunt? Laudantium recusandae expedita quo tempore dolore!
            Neque facilis fugit aut labore! Adipisci unde maiores, repellat amet
            harum quibusdam tenetur quaerat ad. Optio, dolore.
          </MainStyled>
        </HomeStyled>
      )}
    </>
  );
};

export default Home;
