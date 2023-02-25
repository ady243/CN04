import React from "react";

export const Bio = ({ items, Heading }) => {
  return (
    <>
      <Heading title="Petite Biographie" />
      <div className="about_details_bio">
        {items.bio.map((val) => (
          <>
            <div>
              <div>
                <h4>
                  Passionné dans le sport depuis mon jeune âge, j'ai choisi le
                  sport business car Les métiers dans le marketing sportif vous
                  assurent de ne pas vous ennuyer, de développer vos
                  connaissances, vos compétences, et d'apporter votre expertise.
                  Transformer son hobby en projet professionnel est une réelle
                  chance et opportunité. L'audience est très large mais très
                  sensible, c'est pourquoi les marques, événements sportifs,
                  clubs, fédérations et organisations sportives cherchent à être
                  visibles et créer une communauté. La notion de groupe est
                  essentielle dans le secteur du sport.
                </h4>
              </div>

              <div className="about_details_bio_box_item">
                <p>{val.para3}</p>
              </div>
              <div className="about_details_bio_box_item">
                <img src={val.images} alt="" />
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
