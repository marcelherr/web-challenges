import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  const DetailsPage = styled.div`
    background-color: ${volume.color};
    padding: 20px;
    display: flex;
    color: white;
    gap: 20px;
    list-style-type: none;
  `;
  const StyledLinkBox = styled.p`
    text-align: right;
  `;

  const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
      color: lightgrey;
      text-decoration: underline;
    }
  `;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <DetailsPage>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              <p>{ordinal}:</p>
              <strong>{title}</strong>
            </li>
          ))}
        </ul>

        <Image
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </DetailsPage>
      {previousVolume ? (
        <StyledLinkBox>
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            <p>← Previous Volume:</p>
            {previousVolume.title}
          </StyledLink>
        </StyledLinkBox>
      ) : null}
      {nextVolume ? (
        <StyledLinkBox>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            <p>Next Volume:</p>
            {nextVolume.title} →
          </StyledLink>
        </StyledLinkBox>
      ) : null}
    </>
  );
}
