using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.DTOs;
public record MemberDto(
    string Email,
    string UserName,
    int Age,
    string City,
    string Country
);
