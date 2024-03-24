import Button from "@/components/button/Button";
import ButtonLink from "@/components/button/ButtonLink";
import Container from "@/components/container/Container";
import Header from "@/components/layout/Header";
import Paragraph from "@/components/text/Paragraph";
import Title from "@/components/text/Title";
import Image from "next/image";

const socials = [
    {
        link: "#",
        icon: "/assets/icons/fb.svg",
        alt: "fb",
    },
    {
        link: "#",
        icon: "/assets/icons/x.svg",
        alt: "x",
    },
    {
        link: "#",
        icon: "/assets/icons/gg.svg",
        alt: "gg",
    },
    {
        link: "#",
        icon: "/assets/icons/telegram.svg",
        alt: "telegram",
    },
];

export default function Home() {
    return (
        <main>
            <section className="h-screen relative py-16 max-lg:py-8 max-md:h-dvh">
                <Image
                    src={"/assets/images/hero.jpg"}
                    alt="background"
                    className="absolute z-0"
                    loading="lazy"
                    layout="fill"
                    objectFit="cover"
                />
                <Container className="z-20 relative flex flex-col justify-between h-full max-lg:justify-normal max-lg:gap-10">
                    <div className="flex flex-col max-lg:gap-4">
                        <Image src={"/next.svg"} alt="logo" width={128} height={64} />
                        <div className="flex items-center gap-16 max-lg:flex-col-reverse max-lg:gap-4">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <Title className="font-beaufort font-medium text-white tracking-[0.38px] leading-[56px] text-[3.5rem] max-lg:text-[2rem]">
                                        Coming soon
                                    </Title>
                                    <Paragraph className="font-spiegel font-normal text-white text-pretty max-w-[800px] text-[1rem]">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum provident rerum
                                        autem magnam dolorem earum omnis nihil ipsum doloremque minus eligendi incidunt
                                        hic assumenda dicta, reiciendis voluptatum repudiandae doloribus beatae eum.
                                        Illo vel vero magnam.
                                    </Paragraph>
                                </div>
                                <Button className="w-fit border bg-gradient-to-br from-[#520C5C] to-[#23085C] hover:bg-gradient-to-l">
                                    LEARN MORE
                                </Button>
                            </div>
                            <Image
                                src={"/assets/images/hero-image.png"}
                                alt="background"
                                loading="lazy"
                                objectFit="cover"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                    <div className="flex mx-auto items-center justify-center gap-4">
                        {socials.map((social) => (
                            <ButtonLink
                                key={social.alt}
                                href={social.link}
                                target="_blank"
                                className="p-2 rounded-md border-2 border-black shadow-md bg-white/50 duration-300 group"
                            >
                                <Image
                                    src={social.icon}
                                    alt={social.alt}
                                    width={24}
                                    height={24}
                                    className="group-hover:scale-110 duration-300"
                                />
                            </ButtonLink>
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}
