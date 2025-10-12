import { Activity, Youtube, Play, Users, Eye, Calendar, Award } from 'lucide-react';
import { ExtracurricularActivity, YouTubeChannel } from '../types/portfolio';

interface ExtracurricularActivitiesProps {
  activities: ExtracurricularActivity[];
}

export default function ExtracurricularActivities({ activities }: ExtracurricularActivitiesProps) {
  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  const formatViews = (views: string) => {
    return views;
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'youtube':
        return <Youtube className="text-red-400" size={24} />;
      default:
        return <Activity className="text-purple-400" size={24} />;
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'youtube':
        return {
          primary: 'red-400',
          secondary: 'pink-500',
          border: 'red-500/20',
          borderHover: 'red-500/50',
          shadow: 'red-500/20',
          bg: 'red-500/10'
        };
      default:
        return {
          primary: 'purple-400',
          secondary: 'pink-500',
          border: 'purple-500/20',
          borderHover: 'purple-500/50',
          shadow: 'purple-500/20',
          bg: 'purple-500/10'
        };
    }
  };

  const renderYouTubeActivity = (activity: ExtracurricularActivity) => {
    const channel = activity.details as YouTubeChannel;
    const colors = getActivityColor(activity.type);

    return (
      <div className="space-y-8">
        {/* Activity Header */}
        <div className={`bg-slate-900/50 backdrop-blur-sm border border-${colors.border} rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-${colors.borderHover} transition-all duration-300`}>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              {channel.logoUrl ? (
                <img
                  src={channel.logoUrl}
                  alt={`${channel.channelName} logo`}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-${colors.border}`}
                />
              ) : (
                <div className={`p-4 bg-${colors.bg} rounded-2xl`}>
                  <Youtube className={`text-${colors.primary}`} size={48} />
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
                  <div className={`flex items-center gap-2 text-${colors.primary}`}>
                    <Users size={16} />
                    <span>{channel.subscriberCount} subscribers</span>
                  </div>
                )}
                {channel.totalViews && (
                  <div className={`flex items-center gap-2 text-${colors.primary}`}>
                    <Eye size={16} />
                    <span>{channel.totalViews} total views</span>
                  </div>
                )}
                {channel.videoCount && (
                  <div className={`flex items-center gap-2 text-${colors.primary}`}>
                    <Play size={16} />
                    <span>{channel.videoCount} videos</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href={channel.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 bg-${colors.primary.split('-')[0]}-500 hover:bg-${colors.primary.split('-')[0]}-600 text-white rounded-lg font-semibold transition-colors duration-300`}
              >
                <Youtube size={20} />
                Visit Channel
              </a>
            </div>
          </div>
        </div>

        {/* Achievements */}
        {activity.achievements && activity.achievements.length > 0 && (
          <div className={`bg-slate-900/50 backdrop-blur-sm border border-${colors.border} rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-${colors.borderHover} transition-all duration-300`}>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className={`text-${colors.primary}`} size={24} />
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activity.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg border border-${colors.border} hover:border-${colors.borderHover} transition-all duration-300`}
                >
                  <div className={`p-1 bg-${colors.bg} rounded-full flex-shrink-0 mt-1`}>
                    <Award className={`text-${colors.primary}`} size={12} />
                  </div>
                  <span className="text-slate-300 text-sm sm:text-base">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Featured Videos */}
        <div>
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center lg:text-left">
            Featured Content
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {channel.featuredVideos.map((video, index) => (
              <div
                key={video.id}
                className={`group relative bg-slate-900/50 backdrop-blur-sm border border-${colors.border} rounded-xl overflow-hidden hover:border-${colors.borderHover} transition-all duration-300 hover:shadow-2xl hover:shadow-${colors.shadow} hover:-translate-y-2`}
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
                      <Play className={`text-${colors.primary}`} size={48} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`p-3 bg-${colors.primary.split('-')[0]}-500 rounded-full`}>
                      <Play className="text-white fill-current" size={24} />
                    </div>
                  </div>
                  {video.views && (
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs">
                      {formatViews(video.views)} views
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-4 sm:p-6">
                  <h5 className={`text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-${colors.primary} transition-colors line-clamp-2`}>
                    {video.title}
                  </h5>
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
                      className={`text-${colors.primary} hover:text-${colors.primary.replace('400', '300')} text-sm font-semibold transition-colors`}
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
    );
  };

  return (
    <section id="extracurricular" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-purple-500/10 rounded-xl mb-4">
            <Activity className="text-purple-400" size={24} />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
            Extracurricular Activities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Beyond academics - creative pursuits and community involvement
          </p>
        </div>

        <div className="space-y-12">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className="space-y-6"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Activity Overview */}
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className={`p-3 bg-${getActivityColor(activity.type).bg} rounded-xl flex-shrink-0`}>
                  {getActivityIcon(activity.type)}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{activity.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      {activity.startDate && (
                        <span>
                          {activity.startDate} - {activity.endDate || 'Present'}
                        </span>
                      )}
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        activity.status === 'active' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {activity.status === 'active' ? 'Active' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>

              {/* Activity Details */}
              {activity.type === 'youtube' && renderYouTubeActivity(activity)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}