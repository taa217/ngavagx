import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { ROUTES } from '../../constants';

const CTARibbon: React.FC = () => {
  return (
    <section className="bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          Join the movement to build community-owned prosperity
        </h2>
        <p className="mt-3 text-primary-100">
          Start investing in local inventory today or partner with us to activate more spaces.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ROUTES.REGISTER}>
            <Button size="lg" className="bg-white text-primary-700 hover:bg-primary-50">
              Become an investor
            </Button>
          </Link>
          <Link to={ROUTES.CONTACT}>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-primary-700">
              Partner with us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTARibbon;



