import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import LogoImg from '../assets/cookify logo.png';
import UserLogin from '../assets/user login 2.png';
import BackgroundImg from '../assets/Food Images.avif';

const recipeData = {
  RICE: {
    VEG: ['Lemon Rice', 'Curd Rice', 'Veg Fried Rice', 'Rice Cutlet'],
    'NON-VEG': ['Chicken Fried Rice', 'Egg Fried Rice']
  },
  POTATO: {
    VEG: ['Aloo Paratha', 'Potato Sandwich', 'Masala Dosa Filling', 'Potato Balls', 'Potato Cutlet']
  },
  'LEFTOVER CHICKEN': {
    'NON-VEG': ['Chicken Wrap', 'Chicken Sandwich', 'Chicken Fried Rice']
  },
  CHAPATI: {
    VEG: ['Veggies Mixed Chapati/Roti'],
    'NON-VEG': ['Egg Mixed Chapati/Roti']
  },
  PASTA: {
    VEG: ['Veg Pasta'],
    'NON-VEG': ['Egg Pasta']
  },
  PANEER: {
    VEG: ['Paneer Sandwich', 'Paneer Tikka Wrap']
  },
  'BOILED EGGS': {
    'NON-VEG': ['Egg Curry', 'Egg Sandwich', 'Egg Biryani']
  },
  'HALF CUT VEGGIES': {
    VEG: ['Veg Gravy', 'Quick Salad'],
    'NON-VEG': ['Omelet Stuffing']
  },
  IDLIS: {
    VEG: ['Idli Upma'],
    'NON-VEG': ['Egg Mixed Idli']
  },
  BREAD: {
    VEG: ['Potato Sandwich', 'Paneer Sandwich', 'Bread Halwa', 'Bread Rolls'],
    'NON-VEG': ['Egg Sandwich', 'Chicken Sandwich']
  }
};

export default function Leftover() {
  const navigate = useNavigate();

  const [selectedLeftover, setSelectedLeftover] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState('');
  const [typeOptions, setTypeOptions] = useState([]);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setSelectedType('');
    setSelectedRecipe('');
    if (selectedLeftover) {
      const types = Object.keys(recipeData[selectedLeftover] || {});
      setTypeOptions(types);
    } else {
      setTypeOptions([]);
    }
  }, [selectedLeftover]);

  useEffect(() => {
    setSelectedRecipe('');
    if (selectedLeftover && selectedType) {
      const recipeList = recipeData[selectedLeftover]?.[selectedType] || [];
      setRecipes(recipeList);
    } else {
      setRecipes([]);
    }
  }, [selectedType]);

  const handleGenerate = () => {
    navigate('/recipe', {
      state: {
        leftover: selectedLeftover,
        type: selectedType,
        recipe: selectedRecipe
      }
    });
  };

  return (
    <div className='min-h-screen p-6 flex flex-col items-center bg-cover bg-center' style = {{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.3)), url(${BackgroundImg})`}}>
      {/* Header */}
      <div className='w-full flex justify-between items-center mb-20 -mt-10'>
        <button>
          <img src={LogoImg} alt='Cookify Logo' className='-ml-5 w-40 h-auto' />
        </button>
        <button>
          <img src={UserLogin} alt='User Login' className='w-14 h-14' />
        </button>
      </div>

      {/* Main Card */}
      <div className='bg-white p-6 rounded-xl shadow-md w-full max-w-2xl space-y-6'>
        <h1 className='text-2xl font-bold text-center text-gray-900'>
          Make your Favourite Dishes
        </h1>

        {/* Leftover Selection */}
        <div>
          <p className='text-lg font-semibold mb-2'>Select your Leftover</p>
          <div className='flex flex-wrap gap-4'>
            {Object.keys(recipeData).map((item) => (
              <label key={item} className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='leftover'
                  value={item}
                  checked={selectedLeftover === item}
                  onChange={(e) => setSelectedLeftover(e.target.value)}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Type Selection */}
        {typeOptions.length > 0 && (
          <div>
            <p className='text-lg font-semibold mb-2'>Select your Choice</p>
            <div className='flex gap-6'>
              {typeOptions.map((type) => (
                <label key={type} className='flex items-center gap-2'>
                  <input
                    type='radio'
                    name='type'
                    value={type}
                    checked={selectedType === type}
                    onChange={(e) => setSelectedType(e.target.value)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Recipe Selection */}
        {recipes.length > 0 && (
          <div>
            <p className='text-lg font-semibold mb-2'>Select your Recipe</p>
            <select
              className='w-full p-3 border rounded-lg'
              value={selectedRecipe}
              onChange={(e) => setSelectedRecipe(e.target.value)}
            >
              <option value=''>-- Select a Recipe --</option>
              {recipes.map((recipe, idx) => (
                <option key={idx} value={recipe}>
                  {recipe}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Generate Button */}
        {selectedLeftover && selectedType && selectedRecipe && (
          <div className='text-center'>
            <button
              onClick={handleGenerate}
              className='bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold'
            >
              GENERATE RECIPE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}