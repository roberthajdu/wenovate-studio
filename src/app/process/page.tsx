import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/build.jpeg'
import imageMeeting from '@/images/delivery.jpeg'
import imageWhiteboard from '@/images/discovery.jpeg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Felfedezés" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>Az együttműködés az alapos megértéssel kezdődik.</p>
        <p>
          Feltérképezzük vállalkozásod céljait, a célközönséget és a működési
          környezetet, hogy szilárd alapokat teremtsünk a projektedhez.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ezen a fázison belül:
      </h3>
      <TagList className="mt-4">
        <TagListItem>Mélyinterjúk</TagListItem>
        <TagListItem>Versenyelemzés</TagListItem>
        <TagListItem>Üzleti célok meghatározása</TagListItem>
        <TagListItem>Koncepciótervek kidolgozása</TagListItem>
        <TagListItem>Felmérések és kutatások</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Stratégiai tervezés" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Az első fázis eredményeire építve részletes stratégiát állítunk össze,
          amely pontosan lefedi a projekt lépéseit és mérföldköveit.
        </p>
        <p>
          Az átláthatóság minden pillanatban biztosított – így mindig tudni
          fogod, hol tartunk.
        </p>
        <p>
          Emellett kialakítjuk a főbb tervezési kereteket is, hogy a végső
          megoldás már a kezdetektől kézzelfogható legyen.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Zsiga Gyula', role: 'Szakmai szemmel blog' }}
        className="mt-12"
      >
        A Wenovate csapatával végig tudtam, hogy a projekt jó kezekben van. Az
        átláthatóságuk és precizitásuk kiemelkedő.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section
      title="Fejlesztés és optimalizálás"
      image={{ src: imageMeeting, shape: 2 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A jóváhagyott stratégia alapján fejlesztjük és optimalizáljuk a
          megoldásodat a legkorszerűbb technológiák alkalmazásával.
        </p>
        <p>
          A minőség és a rugalmasság garantálja, hogy az eredmény pontosan
          megfeleljen az elvárásaidnak.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Ezen a fázison belül
      </h3>
      <List className="mt-8">
        <ListItem title="Tesztelés">
          Teljes körű tesztelés a kifogástalan működésért
        </ListItem>
        <ListItem title="Infrastruktúra">
          Stabil infrastruktúra kiépítése a hosszú távú siker érdekében
        </ListItem>
        <ListItem title="Támogatás">
          Élesítés utáni támogatás és karbantartás
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro
        eyebrow="Értékeink"
        title="Megbízhatóság és innováció egyensúlya"
      >
        <p>
          A Wenovate-nál a legfrissebb technológiákat ötvözzük a következetes,
          megbízható kivitelezéssel.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Precizitás">
            A részletekre való odafigyelés munkánk alapja.
          </GridListItem>
          <GridListItem title="Hatékonyság">
            Az idődet és az erőforrásaidat tiszteletben tartva dolgozunk.
          </GridListItem>
          <GridListItem title="Rugalmasság">
            Az egyedi igényeidhez igazítjuk megoldásainkat.
          </GridListItem>
          <GridListItem title="Őszinteség">
            Átlátható kommunikációval építünk bizalmat.
          </GridListItem>
          <GridListItem title="Hűség">
            Hosszú távú partnerségekben gondolkodunk.
          </GridListItem>
          <GridListItem title="Innováció">
            Folyamatosan keressük az új lehetőségeket, hogy versenyelőnyt
            teremtsünk.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata = {
  title: 'Folyamatunk | Wenovate',
  description:
    'Fedezd fel, hogyan dolgozunk együtt: felfedezés, stratégia, fejlesztés és optimalizálás, hogy a digitális projekted sikeres legyen.',
  openGraph: {
    title: 'Folyamatunk | Wenovate',
    description:
      'Átlátható munkafolyamat modern technológiákkal és üzleti fókuszú megközelítéssel a Wenovate-nál.',
    url: 'https://wenovate.io/process',
    siteName: 'Wenovate',
    locale: 'hu_HU',
    type: 'website',
  },
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Folyamatunk" title="Hogyan dolgozunk a Wenovate-nál">
        <p>
          A Wenovate hisz abban, hogy a hatékony munkafolyamat és a modern
          technológia együtt teremti meg a valódi üzleti sikert. Minden
          projektünket az egyediségéhez igazítjuk, hogy a lehető legjobb
          megoldást szállíthassuk.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
