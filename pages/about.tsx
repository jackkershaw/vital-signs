import Layout from "../components/layout";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-2 gap-5">
          <img src="/images/about.jpg" className="w-full"></img>
          <div>
            <h1 className="font-sans text-4xl pb-5">About</h1>
            <p className="font-serif text-xl">
              We are a bunch of people who work in and around the
              health sector and are in the early stages of getting a
              network together. Our main aim is to understand and
              support the struggles in our sector. We’re from different
              backgrounds in terms of work and organising, but share a
              perspective that in the end it is about working class
              control over the means for a healthy life, and that
              worker and patient control of healthcare is a step
              towards that. If you are interested, come to our next
              meeting, contact us at:
              healthworkersunited@protonmail.com If you want to keep
              up-to-date, follow us on Twitter at: @healthworkersu1
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
}
