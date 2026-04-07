import React, { Suspense } from 'react';
import Player from './Player';
import { useLoaderData } from 'react-router';

const Players = () => {
    const data = useLoaderData();

    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Global CSS for Animations */}
            <style>{`
                @keyframes cardEntrance {
                    from {
                        opacity: 0;
                        transform: translateY(40px) scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }

                .animate-card-load {
                    opacity: 0;
                    animation: cardEntrance 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight pb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent inline-block">
                        All Players
                    </h1>
                    <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full opacity-80"></div>
                </div>

                <Suspense fallback={
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
                    </div>
                }>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
                        {
                            data.map((player, index) => (
                                <div 
                                    key={player.id} 
                                    className="animate-card-load w-full flex justify-center"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Player player={player} />
                                </div>
                            ))
                        }
                    </div>
                </Suspense>
            </div>
        </div>
    );
};

export default Players;