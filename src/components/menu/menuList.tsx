import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import NewCars from "../icons/newcars"
import Cars from "../icons/cars"
import Motorcycle from "../icons/motorcycle"
import Newmotorcycle from "../icons/newmotorcycle"
import Sellcars from "../icons/sellcars"
import Sellmotorcycle from "../icons/sellmotorcycle"
   
  export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Comprar</AccordionTrigger>
          <AccordionContent>
            <Cars/> Carros usados
          </AccordionContent>
          <AccordionContent>
            <NewCars/> Carros novos
          </AccordionContent>
          <AccordionContent>
            <Motorcycle/> Motos usadas
          </AccordionContent>
          <AccordionContent>
            <Newmotorcycle/> Motos novas
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Vender</AccordionTrigger>
          <AccordionContent>
          <Sellcars /> Vender carro
          </AccordionContent>
          <AccordionContent>
          <Sellmotorcycle /> Vender moto
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="[&[data-state=open]>svg]:hidden [&[data-state=closed]>svg]:hidden">Ajuda</AccordionTrigger>
        </AccordionItem>
      </Accordion>
    )
  }