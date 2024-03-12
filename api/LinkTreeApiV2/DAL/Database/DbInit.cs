using Domain.Models;
using Microsoft.EntityFrameworkCore;


namespace DAL.Database
{
    class DbInitializer
    {
        private static User? _userInit { get; set; }
        private static RedirectUrl redirectInit1 { get; set; }
        private static RedirectUrl redirectInit2 { get; set; }
        private static RedirectUrl redirectInit3 { get; set; }
        private static LinkTreeDetail LinkTreeInit { get; set; }
        static bool _hasBeenInit = false;

        public static void Initialize(AppDbContext context, bool dropCreateDatabase)
        {


            if (!_hasBeenInit)
            {
                if (dropCreateDatabase)
                {
                    context.Database.EnsureDeleted();
                }

                if (context.Database.EnsureCreated())
                {
                    if (context.User.Count() == 0)
                    {

                        _userInit = new User
                        {
                            UserId = -1,
                            Name = "Kerem Yilmaz",
                            UserName = "Kerem_Yilmaz",
                        };
                        context.User.Add(_userInit);
                        context.SaveChanges();

                        if (context.LinkTreeDetail.Count() == 0)
                        {
                            LinkTreeInit = new LinkTreeDetail
                            {
                                LinkTreeID = -1,
                                BackgroundColor = "green",
                                HoverColor = "White",
                                Description = "My Linktree Project"


                            };
                        }

                        if (context.RedirectUrl.Count() == 0)
                        {

                            redirectInit1 = new RedirectUrl
                            {
                                UrlID = 1,
                                Url = "https://www.google.com/",
                                Urldescription = "Visit google"


                            };

                            redirectInit2 = new RedirectUrl
                            {
                                UrlID = 2,
                                Url = "https://www.linkedin.com/in/kerem-yilmaz-9944441b9/",
                                Urldescription = "My Linked-In"
                            };
                            context.RedirectUrl.Add(redirectInit1);
                            context.RedirectUrl.Add(redirectInit2);
                            redirectInit3 = new RedirectUrl
                            {
                                UrlID = 3,
                                Url = "https://youtube.com/",
                                Urldescription = "Don't ever click on this"
                            };

                        }

                        _userInit.LinkTreeDetail = LinkTreeInit;
                        LinkTreeInit.Urls2.Add(redirectInit1);
                        LinkTreeInit.Urls2.Add(redirectInit2);
                        LinkTreeInit.Urls2.Add(redirectInit3);

                        context.LinkTreeDetail.Add(LinkTreeInit);
                        context.SaveChanges();

                        context.SaveChanges();
                        context.ChangeTracker.Clear();


                    }
                }

                _hasBeenInit = true;
            }
        }

    }
}
