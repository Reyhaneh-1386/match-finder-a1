namespace api.Repositorys;

public class UserRepository : IUserRepository
    {
        //    #region Db and Token Settings
        private readonly IMongoCollection<AppUser> _collection;

        // constructor - dependency injections
        public UserRepository(IMongoClient client, IMongoDbSettings dbSettings)
        {
            var dbName = client.GetDatabase(dbSettings.DatabaseName);
            _collection = dbName.GetCollection<AppUser>("users");
        }

        public async Task<LoggedInDto?> RegisterAsync(AppUser userInput, CancellationToken cancellationToken)
        {
            AppUser user = await _collection.Find<AppUser>(doc => doc.Email == userInput.Email).FirstOrDefaultAsync(cancellationToken);

            if (user is not null)
                return null;

            await _collection.InsertOneAsync(userInput, null, cancellationToken);

            LoggedInDto loggedInDto = new(
             Email: userInput.Email,
             UserName: userInput.UserName
            );

            return loggedInDto;
        }

        public async Task<List<AppUser>?> GetAllAsync(CancellationToken cancellationToken)
        {
            List<AppUser> appUsers = await _collection.Find(new BsonDocument()).ToListAsync(cancellationToken);

            if (appUsers.Count == 0)
                return null;

            return appUsers;
        }

        public async Task<UpdateDto?> UpdatByIdAsync(string userId, AppUser userInput, CancellationToken cancellationToken)
        {
            UpdateDefinition<AppUser> updateDefinition = Builders<AppUser>.Update.Set(user => user.Email, userInput.Email.Trim().ToLower());

            await _collection.UpdateOneAsync(user => user.Id == userId, updateDefinition, null, cancellationToken);

            AppUser appUser = await _collection.Find(user => user.Id == userId).FirstOrDefaultAsync(cancellationToken);

            if (appUser is null)
                return null;

            UpdateDto updateDto = new(
                Email: appUser.Email
            );

            return updateDto;
        }

        public async Task<DeleteResult?> DeletByIdAsync(string userId, CancellationToken cancellationToken)
        {
            AppUser appUser = await _collection.Find<AppUser>(doc => doc.Id == userId).FirstOrDefaultAsync(cancellationToken);

            if (appUser is null)
                return null;

            return await _collection.DeleteOneAsync<AppUser>(doc => doc.Id == userId, cancellationToken);
        }

    public Task<LoggedInDto?> RegisterAsync(AppUser userInput, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    Task<List<AppUser>?> IUserRepository.GetAllAsync(CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

    public Task<UpdateDto?> UpdatByIdAsync(string userId, AppUser userInput, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
