using FastEndpoints;

namespace Features.Audit.Queries;

public class Request
{
    public int Page { get; set; } = 1;
    public int ItemsPerPage { get; set; } = 10;
}

public class Entry
{
    public required string EntityName { get; set; }
    public required string Operation { get; set; }
    public required string Timestamp { get; set; }
    public string? Before { get; set; }
    public string? After { get; set; }
}

public class Response
{
    public List<Entry> Entries { get; set; } = new();
    public int TotalCount { get; set; }
}

public class ListAuditsEndpoint : Endpoint<Request, Response>
{
    public override void Configure()
    {
        Get("/audit");
        AllowAnonymous();
        Summary(s =>
        {
            s.Summary = "List audit log entries";
        });
    }

    public override async Task HandleAsync(Request req, CancellationToken ct)
    {
        await Send.ErrorsAsync(501, ct);
    }
}
