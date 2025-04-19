using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
   public record AppUser(
[property: BsonId, BsonRepresentation(BsonType.ObjectId)]
string? Id, // hamishe sabet
string Email,
string UserName,
string Password,
string ConfirmPassword,
int Age,
string City,
 string Country
);


