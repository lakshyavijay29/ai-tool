import React, { useEffect, useState } from 'react';
import { Card, FormField, Loader } from '../components';


const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
      return (
        data.map((post) => <Card key={post._id} {...post} />)
      );
    }
    return (
        <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
      );
    };

const Home = () => {
const [loading, setLoading] = useState(false);
const [allPostsvisibility, setAllPostsvisibility] = useState(null);
const [searchText, setSearchText] = useState('abc');
  return (
    <div>
        <section className="max-w-5xl mx-auto">
        <div>
        <h1 className="italic font-extrabold text-[#222328] text-[28px]">The Community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Assortment of creative and visually mesmerizing pictures crafted by the ingenious DALL-E artificial intelligence.</p>
      </div>
      <div className='mt-10'>
        <FormField />
      </div>
      <div>
      {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>

          {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Here you go. Hope you find it useful
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={[]}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={[]}
                  title="No Posts Yet"
                />
              )}
            </div>

            </>
            )}
      </div>
        </section>
    </div>
  )
}

export default Home