import { useEffect, useState } from "react";
import HugeContent from "./HugeContent";


export default function Container() {

  const [showContent, setShowCont] = useState(true)

  return (
    <div>
      <h1>Ajouter un évènement global</h1>
      <button onClick={() => setShowCont(!showContent)}>
      {showContent ? "Masquer":" Afficher"}
      </button>
      {showContent && <HugeContent />}
      <div>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quia soluta facilis 
            accusamus corrupti laborum sunt, recusandae
            officia ratione architecto asperiores 
            ullam cum? Rem, ipsum. Culpa autem nemo 
            error neque nam ut ab quod eum aliquam 
            assumenda quibusdam ipsam dicta Expedita
            natus veniam ratione nostrum in distinctio,
            perferendis magni voluptatum numquam 
            laudantium quas eaque? Minus enim, 
            repellendus in, adipisci accusantium 
            quae nam doloremque deleniti ab eius, 
            quas autem ipsum corporis. Magnam enim 
            velit aliquid explicabo dicta debitis 
            ducimus sequi molestiae. Adipisci iste 
            sit, officia, ad impedit provident ex quaerat 
            placeat saepe, totam voluptates aliquid eius 
            facilis commodi deserunt vero blanditiis. 
            Distinctio cum delectus corrupti error sit 
            suscipit quo, dolores eius quod culpa 
            consequuntur nemo ratione impedit perferendis 
            voluptates et? Unde provident 
            adipisci doloribus corporis aliquam, 
            tempora ducimus laboriosam laudantium 
            aliquid ratione blanditiis tenetur cum quisquam 
            quibusdam saepe fugit rem nemo sint, earum 
            accusantium consequatur. Quisquam facere 
            reiciendis mollitia, ullam officiis, tempore 
            magni a ad harum eius aut nulla sequi. 
            Molestias soluta incidunt illo non eius 
            ipsum natus ad necessitatibus veritatis, 
            id illum aliquid quae dolor, eum expedita 
            sint adipisci recusandae tempore similique 
            dolorum. Incidunt, nihil dolorum autem odit 
            Lorem ipsum dolor sit, amet consectetur adipisicing 
            elit. Maiores voluptatibus amet quaerat asperiores culpa excepturi adipisci quos earum? Quisquam tenetur fuga soluta voluptatibus, nihil natus rerum tempore atque pariatur at temporibus cumque vel alias veniam! Ullam, alias! Sequi amet deserunt modi omnis? Dolorum similique eius voluptas. Culpa quo architecto nostrum eum. Quo placeat corrupti doloribus veniam maxime amet asperiores ab officia, adipisci assumenda animi harum minus similique blanditiis explicabo, dicta, labore modi nulla. Cumque commodi nemo iusto non reprehenderit vero quidem veniam maiores impedit quisquam tempore repellat obcaecati, dolores architecto atque eum eos rerum. Sunt inventore perspiciatis quasi, maxime ratione nemo vitae aspernatur beatae autem temporibus tempora, amet animi reiciendis eos delectus, explicabo molestiae impedit corrupti. Sunt odio sapiente et maiores consequuntur repudiandae fuga unde in! Officiis, culpa! Laborum illo nulla rem asperiores excepturi deleniti maiores repellat explicabo suscipit dolor accusantium perferendis minus sit saepe aliquid consequuntur unde tempore earum dignissimos, recusandae possimus? Perferendis ad sit sapiente iure quaerat aliquam facere nobis necessitatibus expedita, maiores nemo assumenda veritatis voluptas dolor, consequuntur facilis. Suscipit quae ab dolorum, eum quis adipisci in labore harum, nostrum dolorem aut molestias, mollitia officia. Autem, maiores obcaecati dolores magni dolor id voluptates laborum, officiis aperiam laboriosam ex aliquam perspiciatis, vero maxime voluptatibus optio! Accusamus, ipsam, voluptas et, porro asperiores voluptatibus beatae a maxime quibusdam velit officiis accusantium? Corrupti asperiores velit eligendi delectus vitae commodi voluptatibus repellendus neque consectetur esse tenetur debitis quibusdam iste maiores, hic illo amet ex quam soluta dolorem quod suscipit. Debitis temporibus voluptate dolorum fuga! Porro sed nobis cumque, modi esse laboriosam dicta! Magni facilis et similique laborum culpa excepturi placeat id voluptatem aut ipsa. Obcaecati, iusto! Natus aut, asperiores ea magnam facilis assumenda pariatur laudantium voluptates adipisci id quod quo neque deleniti doloribus. Aperiam modi iste, labore corporis sunt dolor harum aliquid atque nulla ipsa consequuntur molestiae deserunt tempora asperiores eum ab, placeat, velit quas id mollitia blanditiis aspernatur tenetur voluptas. Corrupti molestiae, alias eum dolorum nobis quidem sapiente atque est, culpa dolores commodi molestias cumque aut mollitia doloremque aspernatur voluptates consectetur doloribus, magni maxime eligendi officia temporibus! Laborum quaerat quae at ipsum quos commodi repudiandae maxime, est tempora delectus fugiat ex dolores consequuntur veniam aperiam perferendis sunt ducimus earum hic doloremque culpa corrupti saepe debitis. Officia nulla eos tenetur? Debitis corrupti aut exercitationem doloremque aspernatur inventore enim qui similique. Natus provident, dolorum porro libero minus doloremque dicta deleniti consequuntur nobis sint est suscipit! Consequatur quos itaque ratione eligendi cupiditate pariatur architecto, assumenda beatae reiciendis nemo ipsum dolorem aliquam, excepturi autem at. Pariatur praesentium, quasi obcaecati voluptates inventore sunt, laboriosam iusto error est ut minus cum animi cumque consequatur eveniet? Laboriosam doloremque ut deleniti veritatis praesentium unde. Eum saepe porro distinctio deleniti? Eaque ducimus neque delectus cum harum? Consectetur, maiores voluptates! Sint est culpa quaerat, ea, hic, voluptas delectus blanditiis veniam nam deserunt illo. Dicta voluptates quam totam aliquid amet incidunt quos deserunt, illo repellendus voluptatibus ex harum cum impedit in quas, eius beatae pariatur, dolore tempora animi. Qui dolor deleniti ex?
        </div>
    </div>
  )
}
