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
      case 'other':
        return {
          primary: 'green-400',
          secondary: 'green-500',
          border: 'green-500/20',
          borderHover: 'green-500/50',
          shadow: 'green-500/20',
          bg: 'green-500/10'
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

  const renderPartnershipActivity = (activity: ExtracurricularActivity) => {
    const partnership = activity.details;

    return (
      <div className="space-y-8">
        {/* Partnership Header */}
        <div className={`${activity.type === 'other' ? 'relative overflow-hidden bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-slate-900/90 backdrop-blur-sm border border-green-500/30 rounded-xl sm:rounded-2xl transition-all duration-500 hover:border-green-400/60 hover:shadow-2xl hover:shadow-green-500/30 hover:-translate-y-2 group' : 'purple-activity-card'} p-4 sm:p-6 lg:p-8`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-500/20 via-transparent to-green-500/20 transform -skew-x-12 animate-pulse"></div>
          </div>
          
          {/* Partnership Badge */}
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-green-500/20 border border-green-400/30 px-2 sm:px-3 py-1 rounded-full">
            <span className="text-green-400 text-xs font-semibold">🚀 OFFICIAL PARTNER</span>
          </div>

          <div className="relative flex flex-col items-center space-y-6 lg:flex-row lg:items-center lg:space-y-0 lg:gap-6">
            <div className="flex-shrink-0">
              {partnership.company?.includes('ZAP') ? (
                <div className="relative group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl flex items-center justify-center border-2 border-green-500/30 shadow-lg group-hover:shadow-green-500/40 transition-all duration-300 overflow-hidden">
                    {/* Logo Background Glow */}
                    <div className="absolute inset-0 bg-green-500/10 rounded-2xl blur-sm group-hover:bg-green-400/20 transition-colors duration-300"></div>
                    
                    {/* Company Logo */}
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      {partnership.logoUrl ? (
                        <img
                          src={partnership.logoUrl}
                          alt={`${partnership.company} logo`}
                          className="w-full h-full object-contain drop-shadow-lg"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full bg-green-500/20 rounded-lg flex items-center justify-center">
                                <span class="text-green-400 font-bold text-sm sm:text-lg">${partnership.company?.charAt(0) || 'P'}</span>
                              </div>
                            `;
                          }}
                        />
                      ) : (
                        <div className="w-full h-full bg-green-500/20 rounded-lg flex items-center justify-center">
                          <span className="text-green-400 font-bold text-sm sm:text-lg">{partnership.company?.charAt(0) || 'P'}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Floating particles animation - reduced for cleaner look with logo */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-60"></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse opacity-40"></div>
                </div>
              ) : (
                <div className={`p-3 sm:p-4 ${activity.type === 'other' ? 'bg-green-500/10' : 'bg-purple-500/10'} rounded-2xl`}>
                  <Activity className={activity.type === 'other' ? 'text-green-400' : 'text-purple-400'} size={32} />
                </div>
              )}
            </div>
            
            <div className="flex-1 text-center lg:text-left relative min-w-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3">
                <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">{partnership.company}</span>{' '}
                <span className="text-slate-200">Partnership</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 leading-relaxed">
                {partnership.description}
              </p>
              
              {/* Enhanced Info Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 text-xs sm:text-sm mb-3 sm:mb-4">
                <div className="flex items-center gap-1.5 sm:gap-2 bg-green-500/10 border border-green-500/20 px-2 sm:px-3 py-1 rounded-full">
                  <Award size={12} className="text-green-400 flex-shrink-0" />
                  <span className="text-green-300 font-medium truncate">{partnership.partnershipType}</span>
                </div>
                
                {partnership.established && (
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-slate-800/50 border border-slate-600/30 px-2 sm:px-3 py-1 rounded-full">
                    <Calendar size={12} className="text-slate-400 flex-shrink-0" />
                    <span className="text-slate-300 truncate">Est. {partnership.established}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1.5 sm:gap-2 bg-green-500/10 border border-green-500/20 px-2 sm:px-3 py-1 rounded-full">
                  <Activity size={12} className="text-green-400 flex-shrink-0" />
                  <span className="text-green-300 font-medium truncate">Game & Web Hosting</span>
                </div>
              </div>

              {/* Specialties Pills */}
              {partnership.specialties && (
                <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-4">
                  {partnership.specialties.slice(0, 3).map((specialty: string, index: number) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 bg-green-500/5 border border-green-500/20 text-green-300 text-xs rounded-full hover:bg-green-500/10 transition-colors duration-200 text-center"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            <div className="flex-shrink-0 flex flex-col gap-3 w-full sm:w-auto lg:w-auto">
              <a
                href={partnership.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white text-sm sm:text-base rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-green-500/40 hover:scale-105 transform"
              >
                <Activity size={16} className="group-hover:rotate-12 transition-transform duration-300 flex-shrink-0" />
                <span className="truncate">Visit ZAP-Hosting</span>
              </a>
              
              {/* Partnership Status */}
              <div className="text-center">
                <span className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                  <span className="truncate">Active Partnership</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Achievements Section */}
        {activity.achievements && activity.achievements.length > 0 && (
          <div className={`${activity.type === 'other' ? 'relative overflow-hidden bg-gradient-to-br from-slate-900/70 via-slate-800/50 to-slate-900/80 backdrop-blur-sm border border-green-500/25 rounded-xl sm:rounded-2xl transition-all duration-500 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-1 group' : 'purple-activity-card'} p-4 sm:p-6 lg:p-8`}>
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/10 to-transparent transform rotate-12 scale-150"></div>
            </div>
            
            {/* Header with Icon Animation */}
            <div className="relative flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl border border-green-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Award className={activity.type === 'other' ? 'text-green-400' : 'text-purple-400'} size={20} />
                </div>
                <h4 className="text-lg sm:text-xl lg:text-2xl font-bold">
                  <span className="bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent">Partnership</span>
                  <span className="text-white ml-2">Achievements</span>
                </h4>
              </div>
              
              {/* Achievement Count Badge */}
              <div className="sm:ml-auto bg-green-500/10 border border-green-500/20 px-2 sm:px-3 py-1 rounded-full self-start sm:self-center">
                <span className="text-green-400 text-xs sm:text-sm font-medium">{activity.achievements.length} Milestones</span>
              </div>
            </div>
            
            {/* Enhanced Achievement Grid */}
            <div className="relative grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
              {activity.achievements.map((achievement, index) => {
                // Extract emoji and text
                const parts = achievement.split(' ');
                const emoji = parts[0];
                const text = parts.slice(1).join(' ');
                
                return (
                  <div
                    key={index}
                    className={`group/item relative overflow-hidden flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gradient-to-br from-slate-800/60 to-slate-900/40 rounded-xl border ${activity.type === 'other' ? 'border-green-500/20 hover:border-green-400/40' : 'border-purple-500/20 hover:border-purple-500/50'} transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-1`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Achievement Number & Emoji */}
                    <div className={`relative flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 ${activity.type === 'other' ? 'bg-green-500/10 border border-green-500/25' : 'bg-purple-500/10 border border-purple-500/25'} rounded-lg flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200`}>
                      {emoji ? (
                        <span className="text-base sm:text-lg">{emoji}</span>
                      ) : (
                        <>
                          <Award className={activity.type === 'other' ? 'text-green-400' : 'text-purple-400'} size={14} />
                          <span className={`absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 ${activity.type === 'other' ? 'bg-green-400' : 'bg-purple-400'} text-white text-xs rounded-full flex items-center justify-center font-bold`}>
                            {index + 1}
                          </span>
                        </>
                      )}
                    </div>
                    
                    {/* Achievement Text */}
                    <div className="flex-1 min-w-0">
                      <span className="text-slate-200 text-xs sm:text-sm lg:text-base leading-relaxed group-hover/item:text-white transition-colors duration-200 break-words">
                        {text || achievement}
                      </span>
                    </div>
                    
                    {/* Hover Effect Line */}
                    <div className={`absolute bottom-0 left-0 h-0.5 w-0 ${activity.type === 'other' ? 'bg-green-400' : 'bg-purple-400'} group-hover/item:w-full transition-all duration-300`}></div>
                  </div>
                );
              })}
            </div>
            
            {/* Partnership Benefits Section */}
            {partnership.partnerBenefits && (
              <div className="relative mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-green-500/20">
                <h5 className="text-base sm:text-lg font-semibold text-green-300 mb-3 sm:mb-4 flex items-center gap-2">
                  <Activity size={16} className="flex-shrink-0" />
                  <span>Partnership Benefits</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                  {partnership.partnerBenefits.map((benefit: string, index: number) => (
                    <div
                      key={index}
                      className="text-center p-2 sm:p-3 bg-green-500/5 border border-green-500/15 rounded-lg hover:bg-green-500/10 transition-colors duration-200"
                    >
                      <span className="text-green-200 text-xs sm:text-sm break-words">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  const renderYouTubeActivity = (activity: ExtracurricularActivity) => {
    const channel = activity.details as YouTubeChannel;
    const colors = getActivityColor(activity.type);

    return (
      <div className="space-y-8">
        {/* Activity Header */}
        <div className={`${activity.type === 'youtube' ? 'youtube-activity-card' : 'purple-activity-card'} sm:rounded-2xl p-6 sm:p-8`}>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              {channel.logoUrl ? (
                <img
                  src={channel.logoUrl}
                  alt={`${channel.channelName} logo`}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-${colors.border}`}
                />
              ) : (
                <div className={`p-4 ${activity.type === 'youtube' ? 'bg-red-500/10' : 'bg-purple-500/10'} rounded-2xl`}>
                  <Youtube className={activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'} size={48} />
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
                  <div className={`flex items-center gap-2 ${activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'}`}>
                    <Users size={16} />
                    <span>{channel.subscriberCount} subscribers</span>
                  </div>
                )}
                {channel.totalViews && (
                  <div className={`flex items-center gap-2 ${activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'}`}>
                    <Eye size={16} />
                    <span>{channel.totalViews} total views</span>
                  </div>
                )}
                {channel.videoCount && (
                  <div className={`flex items-center gap-2 ${activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'}`}>
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
                className={`inline-flex items-center gap-2 px-6 py-3 ${activity.type === 'youtube' ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'} text-white rounded-lg font-semibold transition-colors duration-300`}
              >
                <Youtube size={20} />
                Visit Channel
              </a>
            </div>
          </div>
        </div>

        {/* Achievements */}
        {activity.achievements && activity.achievements.length > 0 && (
          <div className={`${activity.type === 'youtube' ? 'youtube-activity-card' : 'purple-activity-card'} sm:rounded-2xl p-6 sm:p-8`}>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className={activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'} size={24} />
              Key Achievements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activity.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 bg-slate-800/50 rounded-lg border ${activity.type === 'youtube' ? 'border-red-500/20 hover:border-red-500/50' : 'border-purple-500/20 hover:border-purple-500/50'} transition-all duration-300`}
                >
                  <div className={`p-1 ${activity.type === 'youtube' ? 'bg-red-500/10' : 'bg-purple-500/10'} rounded-full flex-shrink-0 mt-1`}>
                    <Award className={activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'} size={12} />
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
                className={`group relative bg-slate-900/50 backdrop-blur-sm border ${activity.type === 'youtube' ? 'border-red-500/20 hover:border-red-500/50 hover:shadow-red-500/20' : 'border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20'} rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-slate-800 overflow-hidden">
                  {video.thumbnailUrl ? (
                    <img
                      src={video.thumbnailUrl}
                      alt={video.title}
                      className="w-full h-full object-cover video-thumbnail-hover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800">
                      <Play className={activity.type === 'youtube' ? 'text-red-400' : 'text-purple-400'} size={48} />
                    </div>
                  )}
                  <div className="video-overlay"></div>
                  {/* Clickable Play Button */}
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-play-button-overlay cursor-pointer hover:scale-110 transition-transform duration-300"
                  >
                    <div className={`p-3 ${activity.type === 'youtube' ? 'bg-red-500 hover:bg-red-600' : 'bg-purple-500 hover:bg-purple-600'} rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl`}>
                      <Play className="text-white fill-current" size={24} />
                    </div>
                  </a>
                  {video.views && (
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs">
                      {formatViews(video.views)} views
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-4 sm:p-6">
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h5 className={`text-lg sm:text-xl font-bold text-white mb-2 ${activity.type === 'youtube' ? 'hover:text-red-400 group-hover:text-red-400' : 'hover:text-purple-400 group-hover:text-purple-400'} transition-colors line-clamp-2 cursor-pointer`}>
                      {video.title}
                    </h5>
                  </a>
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
                      className={`${activity.type === 'youtube' ? 'text-red-400 hover:text-red-300' : 'text-purple-400 hover:text-purple-300'} text-sm font-semibold transition-colors`}
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
      <div className="absolute top-1/2 right-1/3 w-64 h-64 sm:w-80 sm:h-80 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block p-2 sm:p-3 bg-cyan-500/10 rounded-xl mb-4">
            <Activity className="text-cyan-400" size={24} />
          </div>
          <h2 className="text-4xl xs:text-5xl sm:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 leading-tight">
            Extracurricular Activities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Beyond academics - creative pursuits and community involvement
          </p>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`${index > 0 ? 'pt-8 border-t border-slate-700/50' : ''}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Activity Details */}
              {activity.type === 'youtube' && renderYouTubeActivity(activity)}
              {activity.type === 'other' && renderPartnershipActivity(activity)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}