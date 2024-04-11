import Link from "next/link";
import Image from "next/image";
import { introduction, volumes } from "../../lib/data";
import styled from "styled-components";

const SlyledList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const SyledH2 = styled.h2`
  text-align: center;
`;

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <SyledH2>All Volumes</SyledH2>
      <SlyledList>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Image
              src={volume.cover}
              alt={`Cover image of ${volume.title}`}
              width={140}
              height={230}
            />
            <p>
              <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
            </p>
          </li>
        ))}
      </SlyledList>
    </>
  );
}
