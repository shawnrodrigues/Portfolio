import { Youtube, Play, Users, Eye, Calendar } from 'lucide-react';
import { YouTubeChannel } from '../types/portfolio';

interface YouTubeProps {
  channel: YouTubeChannel;
}

export default function YouTube({ channel }: YouTubeProps) {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatViews = (views: string) => {
    return views;
  };

  return (
    <section id="youtube" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-red-500/10 rounded-xl mb-4">
            <Youtube className="text-red-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent mb-4">
            YouTube Channel
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Gaming adventures, tech reviews, and tutorials
          </p>
        </div>

        {/* Channel Overview */}
        <div className="bg-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 hover:border-red-500/50 transition-all duration-300">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              {channel.logoUrl ? (
                <img
                  src={channel.logoUrl}
                  alt={`${channel.channelName} logo`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-red-500/30"
                />
              ) : (
                <div className="p-4 bg-red-500/10 rounded-2xl">
                  <Youtube className="text-red-400" size={48} />
                </div>
              )}
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{channel.channelName}</h3>
              <p className="text-slate-300 text-base sm:text-lg mb-4 leading-relaxed">
                {channel.description}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm">
                {channel.subscriberCount && (
                  <div className="flex items-center gap-2 text-red-400">
                    <Users size={16} />
                    <span>{channel.subscriberCount} Subscribers</span>
                  </div>
                )}
                {channel.totalViews && (
                  <div className="flex items-center gap-2 text-red-400">
                    <Eye size={16} />
                    <span>{channel.totalViews} Total views</span>
                  </div>
                )}
                {channel.videoCount && (
                  <div className="flex items-center gap-2 text-red-400">
                    <Play size={16} />
                    <span>{channel.videoCount} Videos</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href={channel.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg font-semibold transition-colors duration-300"
              >
                <Youtube size={20} />
                Visit Channel
              </a>
            </div>
          </div>
        </div>

        {/* Featured Videos */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center lg:text-left">
            Featured Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channel.featuredVideos.map((video, index) => (
              <div
                key={video.id}
                className="group relative bg-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  {video.thumbnailUrl ? (
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Play className="text-red-400" size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 bg-red-500 rounded-full">
                      <Play className="text-white fill-current" size={24} />
                    </div>
                  </div>
                  {video.views && (
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs">
                      {formatViews(video.views)} Views
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <p className="text-slate-400 text-sm sm:text-base mb-3 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-slate-500 text-xs sm:text-sm">
                      <Calendar size={12} />
                      <span>{formatDate(video.publishedDate)}</span>
                    </div>
                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-400 hover:text-red-300 text-sm font-semibold transition-colors"
                    >
                      Watch →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}